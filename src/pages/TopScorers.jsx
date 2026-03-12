import React from 'react';
import { useSelector } from 'react-redux';
import './TopScorers.css';

const positionColors = {
  Goalkeeper: '#ffd700',
  Defender: '#00d4ff',
  Midfielder: '#00e676',
  Forward: '#ff3d6b',
};

export default function TopScorers() {
  const players = useSelector(state => state.players);
  const sorted = [...players].sort((a, b) => b.score - a.score);
  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">TOP SCORERS</h1>
          <p className="page-sub">Golden Boot Race</p>
        </div>

        {/* Podium */}
        <div className="podium">
          {[top3[1], top3[0], top3[2]].map((p, i) => {
            if (!p) return null;
            const place = i === 0 ? 2 : i === 1 ? 1 : 3;
            const medals = ['🥇', '🥈', '🥉'];
            const posColor = positionColors[p.position] || '#ccc';
            return (
              <div key={p.id} className={`podium__card podium__card--${place}`}>
                <div className="podium__medal">{medals[place - 1]}</div>
                <div className="podium__avatar" style={{ borderColor: posColor }}>
                  <span className="podium__initials">{p.prenom[0]}{p.nom[0]}</span>
                </div>
                <div className="podium__name">{p.prenom}<br/>{p.nom}</div>
                <div className="podium__team">{p.team}</div>
                <div className="podium__goals">{p.score}<span>goals</span></div>
                <div className="podium__base podium__base"></div>
              </div>
            );
          })}
        </div>

        {/* Leaderboard table */}
        <div className="scorers-table">
          <div className="scorers-table__header">
            <span>Rank</span><span>Player</span><span>Club</span>
            <span>Apps</span><span>Assists</span><span>Rating</span><span>Goals</span>
          </div>
          {sorted.map((p, i) => {
            const posColor = positionColors[p.position] || '#ccc';
            return (
              <div key={p.id} className={`scorers-table__row ${i < 3 ? 'scorers-table__row--top' : ''}`}>
                <span className="scorers-table__rank">
                  {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}
                </span>
                <span className="scorers-table__player">
                  <div className="scorers-table__avatar" style={{ borderColor: posColor }}>
                    {p.prenom[0]}{p.nom[0]}
                  </div>
                  <div>
                    <div className="scorers-table__name">{p.prenom} {p.nom}</div>
                    <div className="scorers-table__pos" style={{ color: posColor }}>{p.position}</div>
                  </div>
                </span>
                <span className="scorers-table__club">{p.team}</span>
                <span>{p.matches}</span>
                <span>{p.assists}</span>
                <span className="scorers-table__rating">{p.rating}</span>
                <span className="scorers-table__goals">{p.score}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
