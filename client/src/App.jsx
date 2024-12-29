import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './components/client/Home'
function App() {
  return (
    <div>
     <Router>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App