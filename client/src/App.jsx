import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './components/client/Home'
import Navbar from './components/Navbar'
import ProductCard from './components/client/ProductCard'
import Cart from './components/client/Cart'


function App() {
  return (
   
    <Router>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/navbar' element={<Navbar/>}></Route>
        <Route path="/products" element={<ProductCard/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
     </Router>
   
  )
}

export default App