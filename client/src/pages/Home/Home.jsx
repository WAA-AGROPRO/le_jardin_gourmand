import React from 'react'
import './Home.scss'

import Hero from '../../layouts/Hero/Hero'
import Pub from '../../layouts/Pub/Pub'
import About from '../../layouts/About/About'
import Localisation from '../../layouts/Localisation/Localisation'

function Home() {


  return (
    <div className='home'>
        <Hero />
        <Pub />
        <About />
        <Localisation />
    </div>
  )
}

export default Home