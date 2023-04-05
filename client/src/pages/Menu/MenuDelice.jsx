import React from 'react'
import MenuLink from '../../components/MenuLink/MenuLink'
import PlatDelice from '../../components/Plat/PlatDelice'
import "./Menu.scss"

function MenuDelice() {
  return (
    <div className="menu-principale">
        <h1 className='menu-principale__title'>Menu</h1>
        <div className="menu-principale__container">
            <MenuLink />
            <section className="menu-principale__content">
                <PlatDelice />
            </section>
        </div>
    </div>
  )
}

export default MenuDelice