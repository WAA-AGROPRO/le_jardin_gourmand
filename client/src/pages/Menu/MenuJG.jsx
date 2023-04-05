import React from 'react'
import MenuLink from '../../components/MenuLink/MenuLink'
import PlatJG from '../../components/Plat/PlatJG'
import "./Menu.scss"

function MenuJG() {
    return (
        <div className="menu-principale">
            <h1 className='menu-principale__title'>Menu</h1>
            <div className="menu-principale__container">
                <MenuLink />
                <section className="menu-principale__content">
                    <PlatJG />
                </section>
            </div>
        </div>
      )
}

export default MenuJG