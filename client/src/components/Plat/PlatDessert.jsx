import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "./Plat.scss"
function PlatDesserts() {
    const [menu, setMenu] = useState({ title: '' , douceurs: [] , glaces: [] , coupes: [] , });

    useEffect(() => {
        axios.get('les_desserts.json').then(result => { setMenu(result.data) }).catch(error => { console.log(error) });
      }, []);

  return (
    <div className="menu-plat">
      {menu && (
          <h2 className="menu-plat__title">{menu.title}</h2>
      )}
      
      <div className="plats-principaux">
        <h3>Douceurs</h3>
        {menu && menu.douceurs.map(plat => (
          <section className="plat plat--animation" key={plat.nom}>
          <div className="plat__info">
            <h4 className="plat__title">{plat.nom}</h4>
            <p className="plat__description">{plat.description}</p>
            <div className="plat__price">{plat.prix}</div>  
          </div>
        </section>
        ))}
        
      </div>
      <div className="plats-principaux">
        <h3>Glaces</h3>
        {menu && menu.glaces.map(plat => (
          <section className="plat plat--animation" key={plat.nom}>
          <div className="plat__info">
            <h4 className="plat__title">{plat.nom}</h4>
            <p className="plat__description">{plat.description}</p>
            <div className="plat__price">{plat.prix}</div>  
          </div>
        </section>
        ))}
        
      </div>
      <div className="plats-principaux">
        <h3>Coupes</h3>
        {menu && menu.coupes.map(plat => (
          <section className="plat plat--animation" key={plat.nom}>
          <div className="plat__info">
            <h4 className="plat__title">{plat.nom}</h4>
            <p className="plat__description">{plat.description}</p>
            <div className="plat__price">{plat.prix}</div>  
          </div>
        </section>
        ))}
        
      </div>
     
    </div>
  )
}

export default PlatDesserts