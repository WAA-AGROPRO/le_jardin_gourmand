
import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Menu from './pages/Menu/Menu';
import MenuSpecial from './pages/Menu/MenuSpecial';
import MenuEmporter from './pages/Menu/MenuEmporter';
import MenuJardinGourmand from './pages/Menu/MenuJG';
import MenuDelice from './pages/Menu/MenuDelice';
import MenuVegetalien from './pages/Menu/MenuVegetalien';
import MenuEntree from './pages/Menu/MenuEntree';
import MenuPlats from './pages/Menu/MenuSaison';
import MenuFromage from './pages/Menu/MenuFromage';
import MenuDessert from './pages/Menu/MenuDessert';
import MenuVins from './pages/Menu/MenuVins';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

function App() {
  return (
      <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu-special" element={<MenuSpecial />} />
          <Route path="menu-emporter" element={<MenuEmporter />} />
          <Route path="/menu-jardin-gourmand" element={<MenuJardinGourmand />} />
          <Route path="/menu-delice" element={<MenuDelice />} />
          <Route path="/menu-vegetalien" element={<MenuVegetalien />} />
          <Route path="/menu-entree" element={<MenuEntree />} />
          <Route path="/menu-plats" element={<MenuPlats />} />
          <Route path="/menu-fromage" element={<MenuFromage />} />
          <Route path="/menu-dessert" element={<MenuDessert />} />
          <Route path="/menu-vins" element={<MenuVins />} /> 
        </Routes>

        <Footer />
      </div>
    </Router>
        
  )
}

export default App
