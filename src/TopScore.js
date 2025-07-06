import React from "react";
import { useSelector } from "react-redux";
import './GlobalStyles.css';


export default function TopScore() {
  const players = useSelector((state) => state.players);

  const topPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div>
      <h1>🏆 Top Scores</h1>
      {topPlayers.map((player, index) => (
        <div key={player.id} style={{ marginBottom: "15px" }}>
          <h2>
            {index + 1}. {player.nom} {player.prenom}
          </h2>
          <h3>Score: {player.score}</h3>
        </div>
      ))}
    </div>
  );
}
