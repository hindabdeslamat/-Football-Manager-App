import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/matches', label: 'Matches', icon: '⚽' },
  { to: '/players', label: 'Players', icon: '👥' },
  { to: '/teams', label: 'Teams', icon: '🏟️' },
  { to: '/topscorers', label: 'Top Scorers', icon: '🏆' },
  { to: '/add-match', label: 'New Match', icon: '+' },
  { to: '/add-player', label: 'New Player', icon: '+' },
  { to: '/finish-match', label: 'End Match', icon: '🔚' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          <span className="navbar__logo">⚽</span>
          <span className="navbar__name">FOOT<span>MANAGER</span></span>
        </Link>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          <div className="navbar__live-badge">
            <span className="live-dot"></span> LIVE
          </div>
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
