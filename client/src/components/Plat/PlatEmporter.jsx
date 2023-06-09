import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "./Plat.scss"
function PlatEmporter() {
    const [menu, setMenu] = useState({ title: '', plats: [] });

    useEffect(() => {
        axios.get('a_emporter.json').then(result => { setMenu(result.data) }).catch(error => { console.log(error) });
      }, []);
   

  return (
    <div className="menu-plat">
      {menu && (
          <h2 className="menu-plat__title">{menu.title}</h2>
      )}
      <div className="plats-principaux">
        <h3>Plats principaux</h3>
        {menu && menu.plats.map(plat => (
          <section className="plat plat--animation" key={plat.nom}>
          <div className="plat__info">
            <h4 className="plat__title">{plat.nom}</h4>
            <p className="plat__description">{plat.description}</p>
          </div>
          
          <div className="plat__confirmation">
          <div className="plat__price">{plat.prix}</div>  
          </div>
        </section>
        ))}
      </div>
    </div>
  )
}

export default PlatEmporter