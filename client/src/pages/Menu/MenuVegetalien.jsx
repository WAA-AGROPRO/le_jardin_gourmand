import React from 'react'
import MenuLink from '../../components/MenuLink/MenuLink'
import PlatVegetalien from '../../components/Plat/PlatVegetalien'
import "./Menu.scss"

function MenuVegetalien() {
    return (
        <div className="menu-principale">
            <h1 className='menu-principale__title'>Menu</h1>
            <div className="menu-principale__container">
                <MenuLink />
                <section className="menu-principale__content">
                    <PlatVegetalien />
                </section>
            </div>
        </div>
      )
}

export default MenuVegetalien