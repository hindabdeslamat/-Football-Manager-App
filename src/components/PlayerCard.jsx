import React from 'react';
import './PlayerCard.css';

const positionColors = {
  Goalkeeper: '#ffd700',
  Defender: '#00d4ff',
  Midfielder: '#00e676',
  Forward: '#ff3d6b',
};

export default function PlayerCard({ player, rank }) {
  const posColor = positionColors[player.position] || '#ccc';
  const initials = `${player.prenom[0]}${player.nom[0]}`;

  return (
    <div className="player-card">
      {rank && <div className="player-card__rank">#{rank}</div>}
      <div className="player-card__avatar" style={{ borderColor: posColor }}>
        <span className="player-card__initials">{initials}</span>
        <div className="player-card__avatar-overlay" style={{ background: `${posColor}15` }}></div>
      </div>
      <div className="player-card__info">
        <div className="player-card__name">{player.prenom} {player.nom}</div>
        <div className="player-card__meta">
          <span className="player-card__position" style={{ color: posColor, borderColor: `${posColor}40`, background: `${posColor}10` }}>
            {player.position}
          </span>
          <span className="player-card__team">{player.team}</span>
        </div>
      </div>
      <div className="player-card__stats">
        <div className="player-card__stat">
          <span className="player-card__stat-val">{player.score}</span>
          <span className="player-card__stat-lbl">Goals</span>
        </div>
        <div className="player-card__stat">
          <span className="player-card__stat-val">{player.assists}</span>
          <span className="player-card__stat-lbl">Assists</span>
        </div>
        <div className="player-card__stat">
          <span className="player-card__stat-val">{player.matches}</span>
          <span className="player-card__stat-lbl">Apps</span>
        </div>
        <div className="player-card__stat">
          <span className="player-card__stat-val player-card__rating">{player.rating}</span>
          <span className="player-card__stat-lbl">Rating</span>
        </div>
      </div>
    </div>
  );
}
