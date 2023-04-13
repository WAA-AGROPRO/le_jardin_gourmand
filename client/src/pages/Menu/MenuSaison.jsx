import React from 'react'
import MenuLink from '../../components/MenuLink/MenuLink'
import PlatSaison from '../../components/Plat/PlatSaison'

import "./Menu.scss"

function MenuSaison() {
    return (
        <div className="menu-principale">
            <h1 className='menu-principale__title'>Menu</h1>
            <div className="menu-principale__container">
                <MenuLink />
                <section className="menu-principale__content">
                <PlatSaison />
                </section>
            </div>
        </div>
      )
}

export default MenuSaison