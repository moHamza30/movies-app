import React from 'react'
import {BrowserRouter as Router,Routes ,Route }from "react-router-dom"
import Header from './components/Header.jsx'
import WatchList from './components/WatchList'
import Add from './components/Add'
import Watched from './components/Watched'
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<WatchList/>}/>
        <Route path='/watched' element={<Watched/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </Router>
    
  )
}

export default App