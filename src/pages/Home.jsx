import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MatchCard from '../components/MatchCard';
import PlayerCard from '../components/PlayerCard';
import './Home.css';

export default function Home() {
  const allMatches = useSelector(state => state.matches);
  const allPlayers = useSelector(state => state.players);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const recentMatches = allMatches.filter(m => m.status === 'FT').slice(0, 3);
  const upcomingMatches = allMatches.filter(m => m.status === 'UPCOMING').slice(0, 3);
  const topScorers = [...allPlayers].sort((a, b) => b.score - a.score).slice(0, 5);

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
          <div className="hero__grid"></div>
        </div>
        <div className="container hero__content">
          <div className="hero__text">
            <div className="hero__eyebrow">🏆 Football Management Platform</div>
            <h1 className="hero__title">
              TRACK YOUR<br/>
              <span>FOOTBALL</span><br/>
              UNIVERSE
            </h1>
            <p className="hero__sub">
              Live scores, player stats, match management — everything you need to follow and manage football.
            </p>
            <div className="hero__actions">
              <Link to="/matches" className="hero__btn hero__btn--primary">View Matches</Link>
              <Link to="/players" className="hero__btn hero__btn--secondary">All Players</Link>
            </div>
          </div>
          <div className="hero__stats">
            <div className="hero__stat-card">
              <div className="hero__stat-num">{allMatches.filter(m=>m.status==='FT').length}</div>
              <div className="hero__stat-lbl">Matches Played</div>
            </div>
            <div className="hero__stat-card">
              <div className="hero__stat-num">{allPlayers.length}</div>
              <div className="hero__stat-lbl">Players</div>
            </div>
            <div className="hero__stat-card">
              <div className="hero__stat-num">{allMatches.filter(m=>m.status==='UPCOMING').length}</div>
              <div className="hero__stat-lbl">Upcoming</div>
            </div>
            <div className="hero__stat-card">
              <div className="hero__stat-num">{allPlayers.reduce((s,p)=>s+p.score,0)}</div>
              <div className="hero__stat-lbl">Total Goals</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Recent Results */}
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">Recent <span>Results</span></h2>
            <Link to="/matches" className="view-all">View All →</Link>
          </div>
          <div className="matches-grid">
            {recentMatches.map(m => (
              <MatchCard key={m.id} match={m} onClick={() => setSelectedMatch(m)} />
            ))}
          </div>
        </section>

        {/* Upcoming */}
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">Upcoming <span>Fixtures</span></h2>
            <Link to="/matches" className="view-all">View All →</Link>
          </div>
          <div className="matches-grid">
            {upcomingMatches.map(m => (
              <MatchCard key={m.id} match={m} />
            ))}
          </div>
        </section>

        {/* Top Scorers */}
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">Top <span>Scorers</span></h2>
            <Link to="/topscorers" className="view-all">Full Table →</Link>
          </div>
          <div className="players-list">
            {topScorers.map((p, i) => (
              <PlayerCard key={p.id} player={p} rank={i + 1} />
            ))}
          </div>
        </section>
      </div>

      {/* Match Detail Modal */}
      {selectedMatch && (
        <div className="modal-overlay" onClick={() => setSelectedMatch(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setSelectedMatch(null)}>✕</button>
            <div className="modal__header">
              <span className="modal__league">{selectedMatch.leagueIcon} {selectedMatch.league}</span>
              <span className="badge badge-ft">FT</span>
            </div>
            <div className="modal__teams">
              <div className="modal__team">
                <span className="modal__flag">{selectedMatch.team1.flag}</span>
                <span className="modal__tname">{selectedMatch.team1.name}</span>
              </div>
              <div className="modal__scores">
                <span>{selectedMatch.team1.score}</span>
                <span className="modal__dash">–</span>
                <span>{selectedMatch.team2.score}</span>
              </div>
              <div className="modal__team">
                <span className="modal__flag">{selectedMatch.team2.flag}</span>
                <span className="modal__tname">{selectedMatch.team2.name}</span>
              </div>
            </div>
            {selectedMatch.scorers?.length > 0 && (
              <div className="modal__scorers">
                <div className="modal__section-title">⚽ Goals</div>
                {selectedMatch.scorers.map((s, i) => (
                  <div key={i} className={`modal__scorer ${s.team === 2 ? 'modal__scorer--right' : ''}`}>
                    <span className="modal__scorer-name">{s.player}</span>
                    <span className="modal__scorer-time">{s.time}</span>
                  </div>
                ))}
              </div>
            )}
            {selectedMatch.stats && (
              <div className="modal__stats">
                <div className="modal__section-title">📊 Stats</div>
                {[
                  ['Possession', selectedMatch.stats.possession, '%'],
                  ['Shots', selectedMatch.stats.shots, ''],
                  ['On Target', selectedMatch.stats.shotsOnTarget, ''],
                  ['Corners', selectedMatch.stats.corners, ''],
                  ['Fouls', selectedMatch.stats.fouls, ''],
                ].map(([label, vals, unit]) => (
                  <div key={label} className="modal__stat-row">
                    <span className="modal__stat-val">{vals[0]}{unit}</span>
                    <div className="modal__stat-bar-wrap">
                      <div className="modal__stat-label">{label}</div>
                      <div className="modal__stat-bar">
                        <div className="modal__stat-fill modal__stat-fill--1" style={{ width: `${vals[0]/(vals[0]+vals[1])*100}%` }}></div>
                        <div className="modal__stat-fill modal__stat-fill--2" style={{ width: `${vals[1]/(vals[0]+vals[1])*100}%` }}></div>
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
