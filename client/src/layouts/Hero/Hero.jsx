import React from 'react'
import './Hero.scss'
import HeroImg from "../../assets/img/hero-1.webp"

import { Link } from 'react-router-dom';
function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">LE JARDIN GOURMAND</h1>
        <p className="hero__subtitle">Restaurant - Traiteur</p>
        <section className="hero__buttons">
        <a href="https://www.thefork.fr/restaurant/le-jardin-gourmand-r1722" className="hero__buttons__button">Réservation</a>
        <Link to={"/menu"} className="hero__buttons__button">La Carte</Link>
        </section>
      </div>
    </div>
  )
}

export default Hero