import React from 'react'
import MenuLink from '../../components/MenuLink/MenuLink'
import PlatFromages from '../../components/Plat/PlatFromages'
import "./Menu.scss"

function MenuFromage() {
    return (
        <div className="menu-principale">
            <h1 className='menu-principale__title'>Menu</h1>
            <div className="menu-principale__container">
                <MenuLink />
                <section className="menu-principale__content">
                    <PlatFromages />
                </section>
            </div>
        </div>
      )
}

export default MenuFromage