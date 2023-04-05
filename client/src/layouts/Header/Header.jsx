import React from 'react'

import Menu from '../../pages/Menu/Menu'

import { Link } from 'react-router-dom';

import FBLogo from '../../components/Logo/Facebook'
import InstaLogo from '../../components/Logo/Instagram'
import TikTokLogo from '../../components/Logo/TikTok'
import './Header.scss'

function Header() {
  


  return (
      <header className="header">
        <Link to={"/"} className="header__logo">Le Jardin Gourmand</Link>
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__list__item">
              <a href="https://www.thefork.fr/restaurant/le-jardin-gourmand-r1722" className="header__nav__list__item__link">Réservation</a>
            </li>
            <li className="header__nav__list__item">
              <a href="https://lejardin-gourmand.byclickeat.fr/order" className="header__nav__list__item__link">Livraison</a>
            </li>
            <li className="header__nav__list__item">
              <Link to={"menu"} className="header__nav__list__item__link">Menu</Link>
            </li>
          </ul>
          <section className="header__social">
          <a href="https://www.facebook.com/lejardingourmand.amberieux" target="_blank" className="header__social__link">
            <FBLogo /> 
          </a>  
          <a href="https://www.instagram.com/?hl=fr" className="header__social__link" target="_blank">
            <InstaLogo />
          </a>
          <a href="https://www.instagram.com/?hl=fr" className="header__social__link" target="_blank">
            <TikTokLogo />
          </a>
          </section>
        </nav>
      </header>

    )
}

export default Header