import React from "react";
import { useSelector } from "react-redux";
import "./TopScore.css";

export default function TopScore() {
  const players = useSelector((state) => state.players);

  const topPlayers = [...players].sort((a, b) => b.score - a.score).slice(0, 5);

  return (
    <div className="topscore-container">
      <h1 className="title">Top Score - Meilleurs Buteurs ⚽</h1>
      <div className="players-list">
        {topPlayers.map((player, index) => (
          <div className="player-card" key={player.id}>
            <div className="player-rank">#{index + 1}</div>
            <img
              src={"/Players/" + player.photo}
              alt={player.nom}
              className="player-photo"
            />
            <div className="player-info">
              <h2>{player.nom} {player.prenom}</h2>
              <p>Score: <strong>{player.score}</strong></p>
              <p>Âge: {player.age}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
