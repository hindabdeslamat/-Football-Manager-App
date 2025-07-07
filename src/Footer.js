import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Football Manager ⚽. Tous droits réservés.</p>
        <p>Développé avec ❤️ par Hind Abdeslamat</p>
      </div>
    </footer>
  );
}
