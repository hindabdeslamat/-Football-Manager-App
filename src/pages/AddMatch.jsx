import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddMatch } from '../store/store';
import { useToast } from '../components/useToast';
import './FormPages.css';

export default function AddMatchPage() {
  const dispatch = useDispatch();
  const players = useSelector(state => state.players);
  const { toast, showToast } = useToast();

  const [form, setForm] = useState({ id: '', date: '', idJoueur1: '', idJoueur2: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.idJoueur1 === form.idJoueur2) {
      showToast('❌ Players must be different');
      return;
    }
    dispatch(AddMatch(form.id || Date.now(), form.date, form.idJoueur1, form.idJoueur2));
    showToast('✅ Match added successfully!');
    setForm({ id: '', date: '', idJoueur1: '', idJoueur2: '' });
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">NEW MATCH</h1>
          <p className="page-sub">Schedule a new match</p>
        </div>
        <div className="fm-form">
          <h2>Add <span>Match</span></h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Match ID (optional)</label>
              <input type="text" name="id" value={form.id} onChange={handleChange} placeholder="Auto-generated if empty" />
            </div>
            <div className="form-group">
              <label>Date *</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Player 1 *</label>
              <select name="idJoueur1" value={form.idJoueur1} onChange={handleChange} required>
                <option value="">— Select Player —</option>
                {players.map(p => <option key={p.id} value={p.id}>{p.prenom} {p.nom} · {p.team}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Player 2 *</label>
              <select name="idJoueur2" value={form.idJoueur2} onChange={handleChange} required>
                <option value="">— Select Player —</option>
                {players.map(p => <option key={p.id} value={p.id}>{p.prenom} {p.nom} · {p.team}</option>)}
              </select>
            </div>
            <button type="submit" className="btn-primary">⚽ Add Match</button>
          </form>
        </div>
      </div>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
