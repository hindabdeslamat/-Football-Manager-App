import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Acceuil from './Acceuil';
import AfficherJoueurs from './AfficherJoueurs';
import AfficherMatch from './AfficherMatch';
import NouveauMatch from './NouveauMatch';
import NouveauJoueur from './NouveauJoueur';
import TerminerMatch from './TerminerMatch';
import TopScore from './TopScore';
import './GlobalStyles.css'; // Import global styles


function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-container">
          <img src="\football.png" alt="Logo" className="logo" />
          <h1 className="site-title">Football Manager</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/accueil">Accueil</Link></li>
            <li><Link to="/joueurs">Joueurs</Link></li>
            <li><Link to="/matchs">Matchs</Link></li>
            <li><Link to="/NewMatch">Nouveau Match</Link></li>
            <li><Link to="/NewPlayer">Nouveau Joueur</Link></li>
            <li><Link to="/Terminer">Terminer Match</Link></li>
            <li><Link to="/TopScore">Top Score</Link></li>
          </ul>
        </nav>
      </header>

      {/* Routing */}
      <main className="main-content">
        <Routes>
          <Route path="/accueil" element={<Acceuil />} />
          <Route path="/joueurs" element={<AfficherJoueurs />} />
          <Route path="/matchs" element={<AfficherMatch />} />
          <Route path="/NewMatch" element={<NouveauMatch />} />
          <Route path="/NewPlayer" element={<NouveauJoueur />} />
          <Route path="/Terminer" element={<TerminerMatch />} />
          <Route path="/TopScore" element={<TopScore />} />
        </Routes>
      </main>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Play Now !!</h1>
          <p>Organisez, suivez et gérez vos matchs et joueurs facilement.</p>
        </div>
        <div className="hero-card">
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Football Manager by Hind Abdeslamat. Tous droits réservés.</p>
      </footer>
    </div>
    
  );
}

export default App;
