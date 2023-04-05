import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "./Plat.scss"

function Plat() {
  const [menu, setMenu] = useState({});

  useEffect(() => {
      async function fetchMenu() {
        const result = await axios.get('menu_special.json');
        setMenu(result.data);
      }
      fetchMenu();
    }, []);
  

  return (
    <div className="menu-plat">
      {menu && (
          <h2 className="menu-plat__title menu-plat__title--special">{menu.title}</h2>
      )}

      {menu.prix && (
        <section className="menu-plat__prices">
          <p className="menu-plat__price menu-plat__price--special">{menu.prix.sans_boisson} </p>
          <p className="menu-plat__price menu-plat__price--special">{menu.prix.a_emporter}</p>
        </section>  
      )}
      <div className="entrees">
        <h3 className="event-color-secondary">Mise en bouche gourmande</h3>
        {menu.mise_en_bouche && menu.mise_en_bouche.map(mise_en_bouche => (
          <section className="plat plat--animation" key={mise_en_bouche.nom}>
          <div className="plat__info">
            <h4 className="plat__title">{mise_en_bouche.nom}</h4>
            <p className="plat__description">{mise_en_bouche.description}</p>
          </div>
          <div className="plat__confirmation">
            i
          </div>
        </section>
        ))}
        <h3 className="event-color-secondary">Entrées</h3>
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
        <h3 className="event-color-secondary">Plats principaux</h3>
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
        <h3 className="event-color-secondary">Desserts</h3>
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

export default Plat