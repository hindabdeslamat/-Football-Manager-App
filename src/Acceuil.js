import React from "react";
import './Acceuil.css';
import { Link } from "react-router-dom";

export default function Acceuil() {
  return (
    <div className="acceuil-container">
      <div className="acceuil-text">
        <h1>Bienvenue sur Football Manager</h1>
        <p>Gérez vos joueurs, matchs et statistiques en toute simplicité.</p>
        <Link to="/NewMatch">
          <button className="start-button">Commencer un match</button>
        </Link>
      </div>
      <div className="acceuil-image">
        <img src="\img3.jpg" alt="Football Hero" />
      </div>
    </div>
  );
}
