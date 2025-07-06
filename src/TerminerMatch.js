import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FinishMatch } from "./StoreFootball";
import "./TerminerMatch.css";
import './GlobalStyles.css';

// Ce composant permet de terminer un match en spécifiant l'ID du match et l'ID du gagnant
export default function TerminerMatch() {
  const dispatch = useDispatch();
  const [matchId, setMatchId] = useState("");
  const [winnerId, setWinnerId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!matchId || !winnerId) {
      alert("Veuillez remplir les deux champs.");
      return;
    }

    dispatch(FinishMatch(parseInt(matchId), parseInt(winnerId)));
    alert("✅ Match terminé !");
    setMatchId("");
    setWinnerId("");
  };

  return (
    <div className="terminer-container">
      <h1>Terminer un match</h1>
      <form onSubmit={handleSubmit} className="form-match">
        <label>ID du match:</label>
        <input
          type="number"
          value={matchId}
          onChange={(e) => setMatchId(e.target.value)}
          required
        />
        <br />

        <label>ID du gagnant:</label>
        <input
          type="number"
          value={winnerId}
          onChange={(e) => setWinnerId(e.target.value)}
          required
        />
        <br />

        <button type="submit">Terminer</button>
      </form>
    </div>
  );
}
// Ce composant permet de terminer un match en spécifiant l'ID du match et l