import React from 'react'
import MenuLink from '../../components/MenuLink/MenuLink'
import PlatEntrees from '../../components/Plat/PlatEntrees'
import "./Menu.scss"

function MenuEntree() {
    return (
        <div className="menu-principale">
            <h1 className='menu-principale__title'>Menu</h1>
            <div className="menu-principale__container">
                <MenuLink />
                <section className="menu-principale__content">
                    <PlatEntrees />   
                </section>
            </div>
        </div>
      )
}

export default MenuEntree