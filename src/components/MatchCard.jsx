import React from 'react';
import './MatchCard.css';

export default function MatchCard({ match, onClick }) {
  const { team1, team2, status, date, league, leagueIcon } = match;
  const isUpcoming = status === 'UPCOMING';
  const isLive = status === 'LIVE';
  const formattedDate = new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <div className={`match-card ${onClick ? 'match-card--clickable' : ''}`} onClick={onClick}>
      <div className="match-card__header">
        <span className="match-card__league">{leagueIcon} {league}</span>
        <span className={`badge ${isLive ? 'badge-live' : isUpcoming ? 'badge-upcoming' : 'badge-ft'}`}>
          {isLive && <span className="live-dot"></span>}
          {isLive ? 'LIVE' : isUpcoming ? 'UPCOMING' : 'FT'}
        </span>
      </div>

      <div className="match-card__body">
        <div className="match-card__team match-card__team--left">
          <span className="match-card__flag">{team1.flag}</span>
          <span className="match-card__team-name">{team1.name}</span>
        </div>

        <div className="match-card__score-block">
          {isUpcoming ? (
            <div className="match-card__date-block">
              <div className="match-card__vs">VS</div>
              <div className="match-card__date">{formattedDate}</div>
            </div>
          ) : (
            <div className="match-card__scores">
              <span className={`match-card__score ${!isLive && team1.score > team2.score ? 'match-card__score--win' : ''}`}>{team1.score}</span>
              <span className="match-card__separator">–</span>
              <span className={`match-card__score ${!isLive && team2.score > team1.score ? 'match-card__score--win' : ''}`}>{team2.score}</span>
            </div>
          )}
        </div>

        <div className="match-card__team match-card__team--right">
          <span className="match-card__flag">{team2.flag}</span>
          <span className="match-card__team-name">{team2.name}</span>
        </div>
      </div>

      <div className="match-card__footer">
        <span className="match-card__stadium">📍 {match.stadium}</span>
        {!isUpcoming && <span className="match-card__detail-link">Details →</span>}
      </div>
    </div>
  );
}
