import React, { useState } from "react";
import SpinningBottle from "./SpinningBottle";
import "../styles/TruthOrDareGame.css";

function TruthOrDareGame({ players, onResetGame }) {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpinComplete = (playerIndex) => {
    setIsSpinning(false);
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <button className="reset-btn" onClick={onResetGame}>
          ← Back to Setup
        </button>
      </div>

      <SpinningBottle
        players={players}
        onSpinComplete={handleSpinComplete}
        isSpinning={isSpinning}
      />
    </div>
  );
}

export default TruthOrDareGame;
