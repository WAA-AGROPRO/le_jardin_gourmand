import React, { useState, useEffect} from "react";
import axios from "axios";

import "./Plat.scss";

function PlatVins() {
    const [menu, setMenu] = useState({});

    useEffect(() => {
        axios.get('menu_vins.json').then(result => { setMenu(result.data) }).catch(error => { console.log(error) });
        }, []);

    return (
        <div className="menu-plat">
            {menu && (
                <h2 className="menu-plat__title">{menu.title}</h2>
            )}
            <div className="plats-principaux">
                <h3>Beaujolais</h3>
                {menu.beaujolais && menu.beaujolais.map(plat => (
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
                <h3>Bourgogne</h3>
                {menu.bourgogne && menu.bourgogne.map(plat => (
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
                <h3>Val de Loire</h3>
                {menu.valdeloire && menu.valdeloire.map(plat => (
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
                <h3>Vallée du Rhône</h3>
                {menu.valleedurhone && menu.valleedurhone.map(plat => (
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
                <h3>Languedoc Et Côtes de Provence</h3>
                {menu.languedocetcotesdeprovence && menu.languedocetcotesdeprovence.map(plat => (
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
                <h3>Blancs</h3>
                {menu.blancs && menu.blancs.map(plat => (
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
                <h3>Rosés</h3>
                {menu.roses && menu.roses.map(plat => (
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
                <h3>Champagnes</h3>
                {menu.champagnes && menu.champagnes.map(plat => (
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

export default PlatVins