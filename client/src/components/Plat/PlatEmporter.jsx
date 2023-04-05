import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "./Plat.scss"
function PlatEmporter() {
    const [menu, setMenu] = useState({});

    useEffect(() => {
        async function fetchMenu() {
          const result = await axios.get('a_emporter.json');
          setMenu(result.data);
        }
        fetchMenu();
      }, []);
    

  return (
    <div className="menu-plat">
      {menu && (
          <h2 className="menu-plat__title">{menu.title}</h2>
      )}
      <div className="plats-principaux">
        <h3>Plats principaux</h3>
        {menu.plats && menu.plats.map(plat => (
          <section className="plat plat--animation" key={plats.nom}>
          <div className="plat__info">
            <h4 className="plat__title">{plats.nom}</h4>
            <p className="plat__description">{plats.description}</p>
          </div>
          <div className="plat__price">{plats.prix}</div>  
          <div className="plat__confirmation">
            i
          </div>
        </section>
        ))}
      </div>
    </div>
  )
}

export default PlatEmporter