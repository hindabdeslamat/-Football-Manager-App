import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddPlayer } from '../store/store';
import { useToast } from '../components/useToast';
import './FormPages.css';

export default function AddPlayerPage() {
  const dispatch = useDispatch();
  const { toast, showToast } = useToast();

  const [form, setForm] = useState({
    id: '', nom: '', prenom: '', age: '', position: '',
    team: '', score: '0', assists: '0', matches: '0', rating: '7.0',
    nationality: 'Morocco',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(AddPlayer({
      ...form,
      id: form.id || Date.now(),
      age: Number(form.age),
      score: Number(form.score),
      assists: Number(form.assists),
      matches: Number(form.matches),
      rating: Number(form.rating),
      photo: null,
    }));
    showToast('✅ Player added successfully!');
    setForm({ id: '', nom: '', prenom: '', age: '', position: '', team: '', score: '0', assists: '0', matches: '0', rating: '7.0', nationality: 'Morocco' });
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">NEW PLAYER</h1>
          <p className="page-sub">Register a new player</p>
        </div>
        <div className="fm-form">
          <h2>Add <span>Player</span></h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input name="prenom" value={form.prenom} onChange={handleChange} required placeholder="e.g. Achraf" />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input name="nom" value={form.nom} onChange={handleChange} required placeholder="e.g. Hakimi" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Age *</label>
                <input type="number" name="age" value={form.age} onChange={handleChange} required min="15" max="50" />
              </div>
              <div className="form-group">
                <label>Position *</label>
                <select name="position" value={form.position} onChange={handleChange} required>
                  <option value="">— Select —</option>
                  <option>Goalkeeper</option>
                  <option>Defender</option>
                  <option>Midfielder</option>
                  <option>Forward</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Club / Team *</label>
              <input name="team" value={form.team} onChange={handleChange} required placeholder="e.g. PSG" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Goals</label>
                <input type="number" name="score" value={form.score} onChange={handleChange} min="0" />
              </div>
              <div className="form-group">
                <label>Assists</label>
                <input type="number" name="assists" value={form.assists} onChange={handleChange} min="0" />
              </div>
              <div className="form-group">
                <label>Appearances</label>
                <input type="number" name="matches" value={form.matches} onChange={handleChange} min="0" />
              </div>
            </div>
            <div className="form-group">
              <label>Rating (0-10)</label>
              <input type="number" name="rating" value={form.rating} onChange={handleChange} min="0" max="10" step="0.1" />
            </div>
            <button type="submit" className="btn-primary">👤 Add Player</button>
          </form>
        </div>
      </div>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
