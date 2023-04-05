import React from 'react'
import PlatDeLaSemaine from '../../components/Plat/PlatDeLaSemaine'
import PlatSpecial from '../../components/Plat/PlatSpecial'
import './Pub.scss'

function Pub() {
  return (
    <div className="pub">
      <section className="pub__menu">
        <PlatDeLaSemaine />
      </section>
      <section className="pub__menu">
        <PlatSpecial />
      </section>
    </div>

  )
}

export default Pub