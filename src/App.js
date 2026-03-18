import React, { useState } from "react";
import "./App.css";
import PlayerSetup from "./components/PlayerSetup";
import TruthOrDareGame from "./components/TruthOrDareGame";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState([]);
  const [numPlayers, setNumPlayers] = useState(0);

  const handleStartGame = (numPlayers, playersList) => {
    setNumPlayers(numPlayers);
    setPlayers(playersList);
    setGameStarted(true);
  };

  const handleResetGame = () => {
    setGameStarted(false);
    setPlayers([]);
    setNumPlayers(0);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎭 Truth or Dare 🎭</h1>
        <p>Spin the bottle and discover your fate!</p>
      </header>

      {!gameStarted ? (
        <PlayerSetup onStartGame={handleStartGame} />
      ) : (
        <TruthOrDareGame players={players} onResetGame={handleResetGame} />
      )}
    </div>
  );
}

export default App;
