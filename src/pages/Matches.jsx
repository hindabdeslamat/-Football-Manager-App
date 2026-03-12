import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MatchCard from '../components/MatchCard';
import './Matches.css';

const FILTERS = ['All', 'FT', 'UPCOMING', 'LIVE'];

export default function Matches() {
  const matches = useSelector(state => state.matches);
  const [filter, setFilter] = useState('All');
  const [leagueFilter, setLeagueFilter] = useState('All');
  const [selectedMatch, setSelectedMatch] = useState(null);

  const leagues = ['All', ...new Set(matches.map(m => m.league))];
  const filtered = matches.filter(m =>
    (filter === 'All' || m.status === filter) &&
    (leagueFilter === 'All' || m.league === leagueFilter)
  );

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">MATCHES</h1>
          <p className="page-sub">Results, fixtures & live scores</p>
        </div>

        <div className="matches-filters">
          <div className="filter-group">
            {FILTERS.map(f => (
              <button key={f} className={`filter-btn ${filter === f ? 'filter-btn--active' : ''}`} onClick={() => setFilter(f)}>
                {f === 'FT' ? 'Results' : f === 'UPCOMING' ? 'Fixtures' : f}
              </button>
            ))}
          </div>
          <select className="league-select" value={leagueFilter} onChange={e => setLeagueFilter(e.target.value)}>
            {leagues.map(l => <option key={l}>{l}</option>)}
          </select>
        </div>

        <div className="matches-count">{filtered.length} match{filtered.length !== 1 ? 'es' : ''}</div>

        {filtered.length === 0 ? (
          <div className="empty-state">No matches found for this filter.</div>
        ) : (
          <div className="matches-full-grid">
            {filtered.map(m => (
              <MatchCard key={m.id} match={m} onClick={() => m.status !== 'UPCOMING' && setSelectedMatch(m)} />
            ))}
          </div>
        )}
      </div>

      {selectedMatch && (
        <div className="modal-overlay" onClick={() => setSelectedMatch(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setSelectedMatch(null)}>✕</button>
            <div className="modal__header">
              <span className="modal__league">{selectedMatch.leagueIcon} {selectedMatch.league}</span>
              <span className="badge badge-ft">FT</span>
            </div>
            <div className="modal__teams">
              <div className="modal__team"><span className="modal__flag">{selectedMatch.team1.flag}</span><span className="modal__tname">{selectedMatch.team1.name}</span></div>
              <div className="modal__scores"><span>{selectedMatch.team1.score}</span><span className="modal__dash">–</span><span>{selectedMatch.team2.score}</span></div>
              <div className="modal__team"><span className="modal__flag">{selectedMatch.team2.flag}</span><span className="modal__tname">{selectedMatch.team2.name}</span></div>
            </div>
            {selectedMatch.scorers?.length > 0 && (
              <div className="modal__scorers">
                <div className="modal__section-title">⚽ Goals</div>
                {selectedMatch.scorers.map((s, i) => (
                  <div key={i} className={`modal__scorer ${s.team===2?'modal__scorer--right':''}`}>
                    <span className="modal__scorer-name">{s.player}</span>
                    <span className="modal__scorer-time">{s.time}</span>
                  </div>
                ))}
              </div>
            )}
            {selectedMatch.stats && (
              <div className="modal__stats">
                <div className="modal__section-title">📊 Stats</div>
                {[['Possession', selectedMatch.stats.possession,'%'],['Shots',selectedMatch.stats.shots,''],['On Target',selectedMatch.stats.shotsOnTarget,''],['Corners',selectedMatch.stats.corners,''],['Fouls',selectedMatch.stats.fouls,'']].map(([lbl,vals,unit])=>(
                  <div key={lbl} className="modal__stat-row">
                    <span className="modal__stat-val">{vals[0]}{unit}</span>
                    <div className="modal__stat-bar-wrap"><div className="modal__stat-label">{lbl}</div>
                      <div className="modal__stat-bar">
                        <div className="modal__stat-fill modal__stat-fill--1" style={{width:`${vals[0]/(vals[0]+vals[1])*100}%`}}></div>
                        <div className="modal__stat-fill modal__stat-fill--2" style={{width:`${vals[1]/(vals[0]+vals[1])*100}%`}}></div>
                      </div>
                    </div>
                    <span className="modal__stat-val">{vals[1]}{unit}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
