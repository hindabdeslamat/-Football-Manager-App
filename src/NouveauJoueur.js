
import './GlobalStyles.css';
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AddPlayer } from "./StoreFootball";
import "./NouveauJoueur.css";

export default function NouveauJoueur() {
  const dispatch = useDispatch();
  const [newPlayer, setNewPlayer] = useState({
    id: "",
    nom: "",
    prenom: "",
    age: "",
    sexe: "",
    score: "",
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlayer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPlayer((prev) => ({
        ...prev,
        photo: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in newPlayer) {
      formData.append(key, newPlayer[key]);
    }

    try {
      const res = await axios.post("http://localhost:5000/api/players", formData);
      alert("✅ Joueur ajouté avec succès !");
      dispatch(AddPlayer(res.data.player));
      setNewPlayer({ id: "", nom: "", prenom: "", age: "", sexe: "", score: "", photo: null });
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("❌ Une erreur s'est produite.");
    }
  };

  return (
    <div className="form-container">
      <h2>Ajouter un nouveau joueur</h2>
      <form onSubmit={handleSubmit} className="form-match" encType="multipart/form-data">
        <label>ID:</label>
        <input type="number" name="id" value={newPlayer.id} onChange={handleChange} required />
        <label>Nom:</label>
        <input type="text" name="nom" value={newPlayer.nom} onChange={handleChange} required />
        <label>Prénom:</label>
        <input type="text" name="prenom" value={newPlayer.prenom} onChange={handleChange} required />
        <label>Âge:</label>
        <input type="number" name="age" value={newPlayer.age} onChange={handleChange} required />
        <label>Sexe:</label>
        <select name="sexe" value={newPlayer.sexe} onChange={handleChange} required>
          <option value="">--Choisir--</option>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
        </select>
        <label>Score:</label>
        <input type="number" name="score" value={newPlayer.score} onChange={handleChange} required />
        <label>Photo:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {preview && (
          <div className="preview-container">
            <p>Preview de l'image sélectionnée:</p>
            <img src={preview} alt="Preview" className="preview-image" />
          </div>
        )}

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
