import React, { useState } from "react";
import SpinningBottle from "./SpinningBottle";
import { truthChallenges, dareChallenges } from "../data/challenges";
import "../styles/TruthOrDareGame.css";

function TruthOrDareGame({ players, onResetGame }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [challengeType, setChallengeType] = useState(null);
  const [challenge, setChallenge] = useState(null);
  const [gameRound, setGameRound] = useState(1);
  const [history, setHistory] = useState([]);

  const handleSpinComplete = (playerIndex) => {
    setIsSpinning(false);
    setSelectedPlayer(playerIndex);
    setChallengeType(null);
    setChallenge(null);
  };

  const selectChallenge = (type) => {
    if (selectedPlayer === null) return;

    const challenges = type === "truth" ? truthChallenges : dareChallenges;
    const randomChallenge =
      challenges[Math.floor(Math.random() * challenges.length)];

    setChallengeType(type);
    setChallenge(randomChallenge);

    // Add to history
    const newEntry = {
      round: gameRound,
      player: players[selectedPlayer],
      type,
      challenge: randomChallenge,
    };
    setHistory([...history, newEntry]);
  };

  const handleNextRound = () => {
    setSelectedPlayer(null);
    setChallengeType(null);
    setChallenge(null);
    setGameRound(gameRound + 1);
    setIsSpinning(false);
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h2>Round {gameRound}</h2>
        <button className="reset-btn" onClick={onResetGame}>
          ← Back to Setup
        </button>
      </div>

      <SpinningBottle
        players={players}
        onSpinComplete={handleSpinComplete}
        isSpinning={isSpinning}
      />

      {selectedPlayer !== null && (
        <div className="challenge-section">
          <div className="selected-player">
            <h3>{players[selectedPlayer]}'s Turn! 🎯</h3>
          </div>

          {!challenge ? (
            <div className="choice-buttons">
              <button
                className="truth-btn"
                onClick={() => selectChallenge("truth")}
              >
                ❓ TRUTH
              </button>
              <button
                className="dare-btn"
                onClick={() => selectChallenge("dare")}
              >
                ⚡ DARE
              </button>
            </div>
          ) : (
            <div className="challenge-display">
              <div className={`challenge-card ${challengeType}`}>
                <div className="challenge-type">
                  {challengeType === "truth" ? "❓ TRUTH" : "⚡ DARE"}
                </div>
                <div className="challenge-text">{challenge}</div>
              </div>

              <button className="next-round-btn" onClick={handleNextRound}>
                Next Round →
              </button>
            </div>
          )}
        </div>
      )}

      {history.length > 0 && (
        <div className="history-section">
          <h3>Game History</h3>
          <div className="history-list">
            {history.map((entry, index) => (
              <div key={index} className={`history-item ${entry.type}`}>
                <span className="history-round">Round {entry.round}</span>
                <span className="history-player">{entry.player}</span>
                <span className={`history-type ${entry.type}`}>
                  {entry.type === "truth" ? "❓ TRUTH" : "⚡ DARE"}
                </span>
                <p className="history-challenge">{entry.challenge}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TruthOrDareGame;
