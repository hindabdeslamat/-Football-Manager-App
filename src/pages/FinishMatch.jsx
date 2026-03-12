import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FinishMatch } from '../store/store';
import { useToast } from '../components/useToast';
import './FormPages.css';

export default function FinishMatchPage() {
  const dispatch = useDispatch();
  const matches = useSelector(state => state.matches);
  const players = useSelector(state => state.players);
  const { toast, showToast } = useToast();

  const activeMatches = matches.filter(m => m.status === 'UPCOMING');
  const [form, setForm] = useState({ id: '', idGagnant: '' });

  const selectedMatch = matches.find(m => String(m.id) === String(form.id));

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(FinishMatch(form.id, form.idGagnant));
    showToast('✅ Match finished!');
    setForm({ id: '', idGagnant: '' });
  };

  const getPlayer = id => players.find(p => String(p.id) === String(id));

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">FINISH MATCH</h1>
          <p className="page-sub">Set the result for a scheduled match</p>
        </div>
        <div className="fm-form">
          <h2>End <span>Match</span></h2>
          {activeMatches.length === 0 ? (
            <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '32px 0' }}>
              No upcoming matches to finish. Add a match first.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Select Match *</label>
                <select name="id" value={form.id} onChange={handleChange} required>
                  <option value="">— Select Match —</option>
                  {activeMatches.map(m => (
                    <option key={m.id} value={m.id}>
                      Match #{m.id} — {new Date(m.date).toLocaleDateString()}
                      {m.team1?.name ? ` · ${m.team1.name} vs ${m.team2.name}` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {selectedMatch && (
                <div className="finish-match-preview">
                  <div className="finish-match-teams">
                    <span>{selectedMatch.team1?.flag || '👤'} {selectedMatch.team1?.name || getPlayer(selectedMatch.idJoueur1)?.nom || 'Player 1'}</span>
                    <span className="finish-vs">VS</span>
                    <span>{selectedMatch.team2?.flag || '👤'} {selectedMatch.team2?.name || getPlayer(selectedMatch.idJoueur2)?.nom || 'Player 2'}</span>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label>Winner *</label>
                <select name="idGagnant" value={form.idGagnant} onChange={handleChange} required>
                  <option value="">— Select Winner —</option>
                  {players.map(p => (
                    <option key={p.id} value={p.id}>{p.prenom} {p.nom} · {p.team}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn-primary">🏁 Finish Match</button>
            </form>
          )}
        </div>
      </div>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
