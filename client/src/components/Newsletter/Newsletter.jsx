import React, { useState } from "react";
import axios from "axios";
import "./Newsletter.scss";

function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Envoie les données d'inscription à l'aide d'une requête HTTP
    console.log(`Inscription à la newsletter avec l'adresse e-mail : ${email}`);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Adresse e-mail :</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
        />
        <button type="submit">S'inscrire</button>
    </form>
  );
}

export default NewsletterForm;
