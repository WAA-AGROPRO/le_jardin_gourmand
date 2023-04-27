

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuLink.scss';

function MenuLink() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (e) => {
    toggleMenu();
  };

  return (
    <div className="menu-list">
      <button className="menu-toggle" onClick={toggleMenu}>
        {!menuOpen ? 'Ouvrir le menu' : 'Fermer le menu'}
      </button>
      <section className={`menu-list__links ${menuOpen ? 'open' : ''}`}>
      <Link className="menu-list__link" to="/menu" onClick={handleLinkClick}>Menu</Link>
            <Link className="menu-list__link" to="/menu-special" onClick={handleLinkClick}>Menu Évènement</Link>
                <Link className="menu-list__link" to="/menu-emporter" onClick={handleLinkClick}>Suggestions à emporter</Link>
                <Link className="menu-list__link" to="/menu-jardin-gourmand" onClick={handleLinkClick}>Menu Jardin Gourmand</Link>
                <Link className="menu-list__link" to="/menu-delice" onClick={handleLinkClick}>Menu Délices de saison</Link>
                <Link className="menu-list__link" to="/menu-vegetalien" onClick={handleLinkClick}>Menu Végétalien</Link>
                <Link className="menu-list__link" to="/menu-entree" onClick={handleLinkClick}>Entrées de saison</Link>
                <Link className="menu-list__link" to="/menu-plats" onClick={handleLinkClick}>Plats de saison</Link>
                <Link className="menu-list__link" to="/menu-fromage" onClick={handleLinkClick}>Spécialités fromagères</Link>
                <Link className="menu-list__link" to="/menu-dessert" onClick={handleLinkClick}>Les Désserts</Link>
                <Link className="menu-list__link" to="/menu-vins" onClick={handleLinkClick}>Cartes des Vins</Link>
           
      </section>
    </div>
  );
}

export default MenuLink;
