import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "./Plat.scss"
function PlatEntrees() {
    const [menu, setMenu] = useState({ title: '' , entrees: [] });

    useEffect(() => {
        axios.get('entrees_de_saison.json').then(result => { setMenu(result.data) }).catch(error => { console.log(error) });
      }, []);

  return (
    <div className="menu-plat">
      {menu && (
          <h2 className="menu-plat__title">{menu.title}</h2>
      )}
      <div className="plats-principaux">
        <h3>Entrées</h3>
        {menu && menu.entrees.map(plat => (
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

export default PlatEntrees