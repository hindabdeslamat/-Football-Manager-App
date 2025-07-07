import './App.css';
import './GlobalStyles.css';
import { Link, Routes, Route } from 'react-router-dom';
import Acceuil from './Acceuil';
import AfficherJoueurs from './AfficherJoueurs';
import AfficherMatch from './AfficherMatch';
import NouveauMatch from './NouveauMatch';
import NouveauJoueur from './NouveauJoueur';
import TerminerMatch from './TerminerMatch';
import TopScore from './TopScore';
import Footer from './Footer'

function App() {
  return (
    <div className="container">
      <div className='navbar'>
        <img src='\football.png' alt='Logo' className='logo'/>
        <nav>
          <ul>
            <li className='nav-item'> <Link to="/accueil">Accueil</Link> </li>
            <li className='nav-item'> <Link to="/joueurs">Joueurs</Link></li>
            <li className='nav-item'> <Link to="/matchs">Matchs</Link></li>
            <li className='nav-item'> <Link to="/NewMatch">Nouveau match</Link></li>
            <li className='nav-item'> <Link to="/NewPlayer">Nouveau joueur</Link></li>
            <li className='nav-item'> <Link to="/Terminer">Terminer Match</Link></li>
            <li className='nav-item'> <Link to="/TopScore">Top score</Link></li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/accueil" element={<Acceuil />} />
        <Route path='/joueurs' element={<AfficherJoueurs />} />
        <Route path='/matchs' element={<AfficherMatch />} />
        <Route path='/NewMatch' element={<NouveauMatch />} />
        <Route path='/NewPlayer' element={<NouveauJoueur />} />
        <Route path='/Terminer' element={<TerminerMatch />} />
        <Route path='/TopScore' element={<TopScore />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
