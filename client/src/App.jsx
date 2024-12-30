import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './components/client/Home'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
     <Router>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/navbar' element={<Navbar/>}></Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App