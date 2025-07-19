import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlacedOrder from './pages/Placed Order/PlacedOrder'
import Home from './pages/Home/home'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlacedOrder/>} />
      </Routes>
    </div>
  )
}

export default App 
