import React from 'react'
import FBLogo from '../../components/Logo/Facebook'
import InstaLogo from '../../components/Logo/Instagram'
import TikTokLogo from '../../components/Logo/TikTok'
import NewsletterForm from '../../components/Newsletter/Newsletter'

import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__left">
        <h2 className="footer__left__title">
          Contact
        </h2>
        <div className="footer__left__container">
          <p className="footer__left__container__number">
            +33 4 74 67 09 06
          </p>
          <section className="header__social">
        <a href="https://fr-fr.facebook.com/" className="header__social__link" target="_blank">
          <FBLogo /> 
        </a>  
        <a href="https://www.instagram.com/?hl=fr" className="header__social__link" target="_blank">
          <InstaLogo />
        </a>
        <a href="https://www.instagram.com/?hl=fr" className="header__social__link" target="_blank">
          <TikTokLogo />
        </a>
          </section>
        </div>
      </section>
      <section className="footer__right">
        <h2 className="footer__left__title">
          Inscription à la Newsletter
        </h2>
        <NewsletterForm />
      </section>
    </footer>
  )
}

export default Footer