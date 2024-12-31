import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './components/client/Home'
import Navbar from './components/Navbar'
import ProductCard from './components/client/ProductCard'
function App() {
  return (
    <div>
     <Router>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/navbar' element={<Navbar/>}></Route>
        <Route path="/products" element={<ProductCard/>}></Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App