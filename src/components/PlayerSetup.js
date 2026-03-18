import React, { useState } from "react";
import "../styles/PlayerSetup.css";

function PlayerSetup({ onStartGame }) {
  const [numPlayers, setNumPlayers] = useState(2);
  const [players, setPlayers] = useState(["Player 1", "Player 2"]);
  const [submitted, setSubmitted] = useState(false);

  const handleNumPlayersChange = (e) => {
    const num = Math.min(Math.max(parseInt(e.target.value) || 2, 2), 30);
    setNumPlayers(num);
    const newPlayers = Array.from({ length: num }, (_, i) => `Player ${i + 1}`);
    setPlayers(newPlayers);
  };

  const handlePlayerNameChange = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index] = value || `Player ${index + 1}`;
    setPlayers(newPlayers);
  };

  const handleStartGame = () => {
    // Filter out empty player names
    const validPlayers = players.filter((p) => p.trim() !== "");
    if (validPlayers.length < 2) {
      alert("Please enter at least 2 players!");
      return;
    }
    setSubmitted(true);
    onStartGame(validPlayers.length, validPlayers);
  };

  return (
    <div className="player-setup">
      <div className="setup-container">
        <h2>Setup Your Game</h2>

        <div className="form-group">
          <label htmlFor="num-players">Number of Players:</label>
          <div className="input-group">
            <input
              type="range"
              id="num-players"
              min="2"
              max="30"
              value={numPlayers}
              onChange={handleNumPlayersChange}
              className="range-input"
            />
            <span className="player-count">{numPlayers}</span>
          </div>
        </div>

        <div className="players-list">
          <h3>Player Names:</h3>
          {players.map((player, index) => (
            <div key={index} className="player-input-group">
              <label>Player {index + 1}:</label>
              <input
                type="text"
                value={player}
                onChange={(e) => handlePlayerNameChange(index, e.target.value)}
                placeholder={`Enter name for Player ${index + 1}`}
                className="player-name-input"
              />
            </div>
          ))}
        </div>

        <button
          className="start-btn"
          onClick={handleStartGame}
          disabled={submitted}
        >
          {submitted ? "Starting..." : "Start Game"}
        </button>
      </div>
    </div>
  );
}

export default PlayerSetup;
