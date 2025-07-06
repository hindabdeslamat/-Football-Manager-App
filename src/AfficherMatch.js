import React from "react";
import { useSelector } from "react-redux";
import "./AfficherMatch.css";
import './GlobalStyles.css';

export default function AfficherMatch() {
  const ListeMatch = useSelector((state) => state.matches);

  return (
    <div className="match-container">
      <h1 className="title">📅 Liste des matchs</h1>

      {ListeMatch.length !== 0 ? (
        <div className="match-grid">
          {ListeMatch.map((match) => (
            <div key={match.id} className="match-card">
              <h2 className="match-title">Match #{match.id}</h2>
              <p className="match-info">{match.date}</p>
              <p className="match-vs">
                🆚 {match.idJoueur1} <strong>vs</strong> {match.idJoueur2}
              </p>
              <p className="match-winner">
                🏆 Gagnant: <strong>{match.idGagnant}</strong>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-message">Aucun match pour le moment.</p>
      )}
    </div>
  );
}
