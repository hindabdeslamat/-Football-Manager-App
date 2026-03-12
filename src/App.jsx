import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Players from './pages/Players';
import Teams from './pages/Teams';
import TopScorers from './pages/TopScorers';
import AddMatch from './pages/AddMatch';
import AddPlayer from './pages/AddPlayer';
import FinishMatch from './pages/FinishMatch';
import './styles/index.css';

function App() {
  return (
    <Provider store={store}>
      <div style={{ paddingTop: 64 }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/players" element={<Players />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/topscorers" element={<TopScorers />} />
            <Route path="/add-match" element={<AddMatch />} />
            <Route path="/add-player" element={<AddPlayer />} />
            <Route path="/finish-match" element={<FinishMatch />} />
            {/* Legacy redirects */}
            <Route path="/accueil" element={<Navigate to="/" replace />} />
            <Route path="/joueurs" element={<Navigate to="/players" replace />} />
            <Route path="/matchs" element={<Navigate to="/matches" replace />} />
            <Route path="/NewMatch" element={<Navigate to="/add-match" replace />} />
            <Route path="/NewPlayer" element={<Navigate to="/add-player" replace />} />
            <Route path="/Terminer" element={<Navigate to="/finish-match" replace />} />
            <Route path="/TopScore" element={<Navigate to="/topscorers" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
