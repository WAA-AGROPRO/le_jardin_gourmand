import React from 'react'
import MenuLink from '../../components/MenuLink/MenuLink'
import PlatSpecial from '../../components/Plat/PlatSpecial'
import "./Menu.scss"


function MenuSpecial() {
  return (
    <div className="menu-principale">
        <h1 className='menu-principale__title'>Menu</h1>
        <div className="menu-principale__container">
            <MenuLink />
            <section className="menu-principale__content">
              <PlatSpecial />
            </section>
        </div>
    </div>
  )
}

export default MenuSpecial