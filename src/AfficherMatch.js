import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddMatch } from "./StoreFootball";
import "./AfficherMatch.css";

export default function NouveauMatch() {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);

  const [form, setForm] = useState({
    id: "",
    date: "",
    idJoueur1: "",
    idJoueur2: "",
    idGagnant: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddMatch(form.id, form.date, form.idJoueur1, form.idJoueur2, form.idGagnant));
    alert("✅ Match ajouté avec succès");
    setForm({ id: "", date: "", idJoueur1: "", idJoueur2: "", idGagnant: "" });
  };

  return (
    <div className="form-container">
      <h2>Ajouter un Nouveau Match</h2>
      <form onSubmit={handleSubmit} className="form-match">
        <label>ID Match:</label>
        <input type="text" name="id" value={form.id} onChange={handleChange} required />

        <label>Date:</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />

        <label>Joueur 1:</label>
        <select name="idJoueur1" value={form.idJoueur1} onChange={handleChange} required>
          <option value="">--Sélectionner--</option>
          {players.map((p) => (
            <option key={p.id} value={p.id}>{p.nom} {p.prenom}</option>
          ))}
        </select>

        <label>Joueur 2:</label>
        <select name="idJoueur2" value={form.idJoueur2} onChange={handleChange} required>
          <option value="">--Sélectionner--</option>
          {players.map((p) => (
            <option key={p.id} value={p.id}>{p.nom} {p.prenom}</option>
          ))}
        </select>

        <label>Gagnant:</label>
        <select name="idGagnant" value={form.idGagnant} onChange={handleChange} required>
          <option value="">--Sélectionner--</option>
          {players.map((p) => (
            <option key={p.id} value={p.id}>{p.nom} {p.prenom}</option>
          ))}
        </select>

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
