import React, { useState } from "react";
import "../styles/SpinningBottle.css";

function SpinningBottle({ players, onSpinComplete, isSpinning }) {
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (isSpinning) return;

    // Random rotations (at least 5 full rotations + random angle)
    const anglePerPlayer = 360 / players.length;
    const randomAngle = Math.random() * 360;
    const totalRotation = rotation + 5 * 360 + randomAngle;

    setRotation(totalRotation);

    // Calculate which player the bottle points to after animation
    const finalAngle = totalRotation % 360;
    // Add 89 to align with player positioning (which uses -90 offset)
    const selectedIndex =
      ((Math.round((finalAngle + 89) / anglePerPlayer) % players.length) +
        players.length) %
      players.length;

    // Call the callback after animation completes (3 seconds)
    setTimeout(() => {
      onSpinComplete(selectedIndex);
    }, 3000);
  };

  return (
    <div className="spinning-bottle-container">
      <div className="bottle-and-circle-wrapper">
        <div className="bottle-wrapper">
          <div
            className={`bottle ${isSpinning ? "spinning" : ""}`}
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <img src="/bottle.png" alt="Bottle" className="bottle-image" />
          </div>
        </div>

        <div className="players-circle">
          {players.map((player, index) => {
            const angle = (360 / players.length) * index - 90;
            const radius = 190;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            return (
              <div
                key={index}
                className="player-position"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                <div className="player-badge">
                  <span className="player-name">{player}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button className="spin-btn" onClick={handleSpin} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "SPIN THE BOTTLE"}
      </button>
    </div>
  );
}

export default SpinningBottle;
