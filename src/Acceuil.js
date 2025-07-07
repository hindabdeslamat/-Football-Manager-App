import React from "react";
import "./GlobalStyles.css";
import { Link } from "react-router-dom";
import "./Acceuil.css";

export default function Acceuil() {
  return (
    <div className="acceuil-container">
      <header className="hero-section">
        <div className="hero-text">
          <h1>Bienvenue sur Football Manager</h1>
          <p>Suivez les matchs, gérez vos joueurs, et restez à jour avec les statistiques !</p>
          <Link to="/matchs">
            <button className="cta-button">Voir les Matchs</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="\img3.jpg" alt="Football" />
        </div>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>📋 Gérer les Joueurs</h2>
          <p>Ajoutez, modifiez et suivez la performance de vos joueurs facilement.</p>
        </div>
        <div className="feature-card">
          <h2>⚽ Organiser les Matchs</h2>
          <p>Créez de nouveaux matchs et terminez-les en quelques clics.</p>
        </div>
        <div className="feature-card">
          <h2>🏆 Top Scores</h2>
          <p>Consultez les meilleurs buteurs de votre base de données.</p>
        </div>
      </section>
    </div>
  );
}
