import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlacedOrder from './pages/Placed Order/PlacedOrder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopupp/LoginPopup'


const App = () => {


  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlacedOrder />} />
        </Routes>
      </div>
      <Footer />

    </>

  )
}

export default App 
