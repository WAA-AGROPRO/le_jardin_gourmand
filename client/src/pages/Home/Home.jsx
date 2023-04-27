import React from 'react'
import './Home.scss'

import Hero from '../../layouts/Hero/Hero'
import Pub from '../../layouts/Pub/Pub'
import About from '../../layouts/About/About'
import Localisation from '../../layouts/Localisation/Localisation'
import Footer from '../../layouts/Footer/Footer'

function Home() {


  return (
    <div className='home'>
        <Hero />
        <Footer />
        <Pub />
        <About />
        <Localisation />
    </div>
  )
}

export default Home