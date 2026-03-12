import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">⚽</span>
          <span className="footer__name">FOOT<span>MANAGER</span></span>
          <p className="footer__desc">Your ultimate football management platform. Track matches, players, scores, and stats.</p>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <div className="footer__col-title">Navigation</div>
            <Link to="/">Home</Link>
            <Link to="/matches">Matches</Link>
            <Link to="/players">Players</Link>
            <Link to="/teams">Teams</Link>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Management</div>
            <Link to="/add-match">New Match</Link>
            <Link to="/add-player">New Player</Link>
            <Link to="/finish-match">End Match</Link>
            <Link to="/topscorers">Top Scorers</Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} FootManager. Built with ⚽by Hind Abdeslamat</span>
        </div>
      </div>
    </footer>
  );
}
