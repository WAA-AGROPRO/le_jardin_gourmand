import React from 'react'
import MenuLink from '../../components/MenuLink/MenuLink'
import PlatVins from '../../components/Plat/PlatVins'
import "./Menu.scss"

function MenuVins() {
  return (
    <div className="menu-principale">
        <h1 className='menu-principale__title'>Menu</h1>
        <div className="menu-principale__container">
            <MenuLink />
            <section className="menu-principale__content">
              <PlatVins />    
            </section>
        </div>
    </div>
  )
}

export default MenuVins