import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "./Plat.scss"
function PlatVegetalien() {
    const [menu, setMenu] = useState({});

    useEffect(() => {
        async function fetchMenu() {
          const result = await axios.get('menu_vegetalien.json');
          setMenu(result.data);
        }
        fetchMenu();
      }, []);
    

  return (
    <div className="menu-plat">
      {menu && (
          <h2 className="menu-plat__title">{menu.title}</h2>
      )}

      {menu.prix && (
        <section className="menu-plat__prices">
          <p className="menu-plat__price">{menu.prix.par_personne} </p>
        </section>  
      )}
      <div className="entrees">
        <h3>Entrées</h3>
        {menu.entrees && menu.entrees.map(entree => (
          <section className="plat plat--animation" key={entree.nom}>
          <div className="plat__info">
            <h4 className="plat__title">{entree.nom}</h4>
            <p className="plat__description">{entree.description}</p>
          </div>  
          <div className="plat__confirmation">
            i
          </div>
        </section>
        ))}
      </div>
      <div className="plats-principaux">
        <h3>Plats principaux</h3>
        {menu.plats_principaux && menu.plats_principaux.map(plat => (
          <section className="plat plat--animation" key={plat.nom}>
          <div className="plat__info">
            <h4 className="plat__title">{plat.nom}</h4>
            <p className="plat__description">{plat.description}</p>
          </div>  
          <div className="plat__confirmation">
            i
          </div>
        </section>
        ))}
      </div>
      <div className="desserts">
        <h3>Desserts</h3>
        {menu.desserts && menu.desserts.map(dessert => (
          <section className="plat plat--animation" key={dessert.nom}>
          <div className="plat__info">
            <h4 className="plat__title">{dessert.nom}</h4>
            <p className="plat__description">{dessert.description}</p>
          </div>  
          <div className="plat__confirmation">
            i
          </div>
        </section>
        ))}
      </div>
    </div>
  )
}

export default PlatVegetalien