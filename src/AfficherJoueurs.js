import React from "react";
import Joueurs from "./Joueurs";
import "./AfficherJoueurs.css";
import './GlobalStyles.css';

// This component displays a list of players with their details
export default function AfficherJoueurs() {
  return (
    <div className="joueurs-container">
      <h2 className="section-title">Nos Joueurs</h2><div className="joueurs-grid">
  {Joueurs.map((joueur) => (
    <div key={joueur.id} className="joueur-card">
      <img 
        src={`/Players/${joueur.photo}`} 
        alt={`${joueur.prenom} ${joueur.nom}`} 
        className="joueur-photo" 
      />
      <h3>{joueur.prenom} {joueur.nom}</h3>
      <p>Âge: {joueur.age}</p>
      <p>Score: <strong>{joueur.score}</strong></p>
    </div>
  ))}
</div>
    </div>
  );
}


