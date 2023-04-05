import React from 'react'
import { Link } from 'react-router-dom'
import "./MenuLink.scss"

function MenuLink() {
  return (
    <div className="menu-list">
        <section className="menu-list__links">
                <Link className="menu-list__link" to="/menu">Menu</Link>
                 <Link className="menu-list__link" to="/menu-special">Menu Évènement</Link>
                <Link className="menu-list__link" to="/menu-emporter">Suggestions à emporter</Link>
                <Link className="menu-list__link" to="/menu-jardin-gourmand">Menu Jardin Gourmand</Link>
                <Link className="menu-list__link" to="/menu-delice">Menu Délices de saison</Link>
                <Link className="menu-list__link" to="/menu-vegetalien">Menu Végétalien</Link>
                <Link className="menu-list__link" to="/menu-entree">Entrées de saison</Link>
                <Link className="menu-list__link" to="/menu-plats">Plats de saison</Link>
                <Link className="menu-list__link" to="/menu-fromage">Spécialités fromagères</Link>
                <Link className="menu-list__link" to="/menu-dessert">Les Désserts</Link>
                <Link className="menu-list__link" to="/menu-vins">Cartes des Vins</Link>
            </section>
    </div>
  )
}

export default MenuLink