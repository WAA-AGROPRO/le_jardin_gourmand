import React from 'react'
import MenuLink from '../../components/MenuLink/MenuLink'
import PlatEmporter from '../../components/Plat/PlatEmporter'
import "./Menu.scss"

function MenuEmporter() {
    return (
        <div className="menu-principale">
            <h1 className='menu-principale__title'>Menu</h1>
            <div className="menu-principale__container">
                <MenuLink />
                <section className="menu-principale__content">
                   <PlatEmporter />
                </section>
            </div>
        </div>
      )
}

export default MenuEmporter