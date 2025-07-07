import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FinishMatch } from "./StoreFootball";
import "./TerminerMatch.css";

export default function TerminerMatch() {
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.matches);
  const players = useSelector((state) => state.players);

  const [form, setForm] = useState({ id: "", idGagnant: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(FinishMatch(form.id, form.idGagnant));
    alert("✅ Match terminé avec succès");
    setForm({ id: "", idGagnant: "" });
  };

  return (
    <div className="form-container">
      <h2>Terminer un Match</h2>
      <form onSubmit={handleSubmit} className="form-match">
        <label>ID du match:</label>
        <select name="id" value={form.id} onChange={handleChange} required>
          <option value="">--Sélectionner--</option>
          {matches.map((match) => (
            <option key={match.id} value={match.id}>Match #{match.id}</option>
          ))}
        </select>

        <label>Gagnant:</label>
        <select name="idGagnant" value={form.idGagnant} onChange={handleChange} required>
          <option value="">--Sélectionner--</option>
          {players.map((p) => (
            <option key={p.id} value={p.id}>{p.nom} {p.prenom}</option>
          ))}
        </select>

        <button type="submit">Terminer</button>
      </form>
    </div>
  );
}
