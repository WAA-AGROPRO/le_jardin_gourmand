import React from 'react'
import MenuLink from '../../components/MenuLink/MenuLink'
import Plat from '../../components/Plat/PlatDeLaSemaine'

import "./Menu.scss"

function MenuSaison() {
    return (
        <div className="menu-principale">
            <h1 className='menu-principale__title'>Menu</h1>
            <div className="menu-principale__container">
                <MenuLink />
                <section className="menu-principale__content">
                <Plat />
                </section>
            </div>
        </div>
      )
}

export default MenuSaison