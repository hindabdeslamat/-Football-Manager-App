import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PlayerCard from '../components/PlayerCard';
import './Players.css';

const POSITIONS = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

export default function Players() {
  const players = useSelector(state => state.players);
  const [position, setPosition] = useState('All');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('score');

  const filtered = players
    .filter(p =>
      (position === 'All' || p.position === position) &&
      (`${p.prenom} ${p.nom}`.toLowerCase().includes(search.toLowerCase()) ||
       p.team?.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'score') return b.score - a.score;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'assists') return b.assists - a.assists;
      if (sortBy === 'name') return a.nom.localeCompare(b.nom);
      return 0;
    });

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">PLAYERS</h1>
          <p className="page-sub">{players.length} players registered</p>
        </div>

        <div className="players-toolbar">
          <input
            className="search-input"
            placeholder="🔍 Search by name or team..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="filter-group">
            {POSITIONS.map(p => (
              <button key={p} className={`filter-btn ${position===p?'filter-btn--active':''}`} onClick={() => setPosition(p)}>{p}</button>
            ))}
          </div>
          <select className="league-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="score">Sort: Goals</option>
            <option value="rating">Sort: Rating</option>
            <option value="assists">Sort: Assists</option>
            <option value="name">Sort: Name</option>
          </select>
        </div>

        <div className="players-count">{filtered.length} player{filtered.length !== 1 ? 's' : ''}</div>

        {filtered.length === 0 ? (
          <div className="empty-state">No players found.</div>
        ) : (
          <div className="players-full-list">
            {filtered.map((p, i) => (
              <PlayerCard key={p.id} player={p} rank={sortBy === 'score' ? i + 1 : undefined} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
