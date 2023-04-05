import React from 'react'
import MenuLink from '../../components/MenuLink/MenuLink'
import PlatDessert from '../../components/Plat/PlatDessert'
import "./Menu.scss"

function MenuDessert() {
  return (
    <div className="menu-principale">
        <h1 className='menu-principale__title'>Menu</h1>
        <div className="menu-principale__container">
            <MenuLink />
            <section className="menu-principale__content">
                <PlatDessert />
            </section>
        </div>
    </div>
  )
}

export default MenuDessert