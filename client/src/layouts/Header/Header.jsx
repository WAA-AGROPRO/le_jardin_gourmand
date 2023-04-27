import React, {useState } from 'react'

import Menu from '../../pages/Menu/Menu'

import { Link } from 'react-router-dom';

import FBLogo from '../../components/Logo/Facebook'
import InstaLogo from '../../components/Logo/Instagram'
import TikTokLogo from '../../components/Logo/TikTok'
import './Header.scss'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e) => {
    toggleMenu();
  };

  

  return (
    <nav className={`nav ${isMenuOpen ? "show" : "hide"}`}>
        <Link to={"/"} className="nav__logo">Le Jardin Gourmand</Link>
          <ul className="nav__links">
            <div className="nav__params">
            <li className="nav__item">
              <a href="https://www.thefork.fr/restaurant/le-jardin-gourmand-r1722" className="nav__link">Réservation</a>
            </li>
            <li className="nav__item">
              <a href="https://lejardin-gourmand.byclickeat.fr/order" className="nav__link">Livraison</a>
            </li>
            <li className="nav__item">
              <Link to={"menu"} className="nav__link" onClick={handleLinkClick}>Menu</Link>
            </li>
            </div>
            <section className="social">
          <a href="https://www.facebook.com/lejardingourmand.amberieux" target="_blank" className="social__link">
            <FBLogo /> 
          </a>  
          <a href="https://www.instagram.com/?hl=fr" className="social__link" target="_blank">
            <InstaLogo />
          </a>
          <a href="https://www.instagram.com/?hl=fr" className="social__link" target="_blank">
            <TikTokLogo />
          </a>
          </section>
          </ul>
          
          <button className="nav__burger" onClick={toggleMenu}>
            <span className={`burger-bar`}>
            </span>
          </button>
    </nav>
    )
}

export default Header