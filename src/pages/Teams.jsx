import React from 'react';
import { useSelector } from 'react-redux';
import { teams } from '../data/matches';
import './Teams.css';

export default function Teams() {
  const players = useSelector(state => state.players);

  const teamStats = teams.map(t => ({
    ...t,
    squad: players.filter(p => p.team === t.name),
    played: t.wins + t.draws + t.losses,
    points: t.wins * 3 + t.draws,
  })).sort((a, b) => b.points - a.points);

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">TEAMS</h1>
          <p className="page-sub">Team standings and squad info</p>
        </div>

        <div className="standings-table">
          <div className="standings-header">
            <span>#</span>
            <span>Team</span>
            <span>P</span>
            <span>W</span>
            <span>D</span>
            <span>L</span>
            <span>GF</span>
            <span>GA</span>
            <span>GD</span>
            <span>Pts</span>
          </div>
          {teamStats.map((team, i) => (
            <div key={team.id} className={`standings-row ${i === 0 ? 'standings-row--first' : ''}`}>
              <span className="standings-pos">{i + 1}</span>
              <span className="standings-team">
                <span className="standings-flag">{team.flag}</span>
                <span className="standings-name">{team.name}</span>
                <span className="standings-league">{team.league}</span>
              </span>
              <span>{team.played}</span>
              <span className="standings-win">{team.wins}</span>
              <span>{team.draws}</span>
              <span className="standings-loss">{team.losses}</span>
              <span>{team.goals}</span>
              <span>{team.conceded}</span>
              <span className={team.goals - team.conceded > 0 ? 'standings-win' : 'standings-loss'}>
                {team.goals - team.conceded > 0 ? '+' : ''}{team.goals - team.conceded}
              </span>
              <span className="standings-pts">{team.points}</span>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{margin:'48px 0 24px'}}>Squad <span>Details</span></h2>
        <div className="teams-grid">
          {teamStats.map(team => (
            <div key={team.id} className="team-card" style={{'--team-color': team.color}}>
              <div className="team-card__header">
                <span className="team-card__flag">{team.flag}</span>
                <div>
                  <div className="team-card__name">{team.name}</div>
                  <div className="team-card__league">{team.league}</div>
                </div>
                <div className="team-card__pts">{team.points} <span>pts</span></div>
              </div>
              <div className="team-card__record">
                <div className="team-card__rec-item"><span>{team.wins}</span><small>W</small></div>
                <div className="team-card__rec-item"><span>{team.draws}</span><small>D</small></div>
                <div className="team-card__rec-item"><span>{team.losses}</span><small>L</small></div>
                <div className="team-card__rec-item"><span>{team.goals}</span><small>GF</small></div>
              </div>
              {team.squad.length > 0 && (
                <div className="team-card__squad">
                  <div className="team-card__squad-title">Squad ({team.squad.length})</div>
                  {team.squad.map(p => (
                    <div key={p.id} className="team-card__player">
                      <span className="team-card__player-name">{p.prenom} {p.nom}</span>
                      <span className="team-card__player-pos">{p.position}</span>
                      <span className="team-card__player-goals">{p.score}⚽</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
