import React from 'react'
import ReactDOM from 'react-dom'
import  HomePage  from './components/Home/Home'
import './App.css'
import Landing from './components/Landing/Landing'
import { Routes, Route } from 'react-router-dom'



function App() {
  

  return (
    
      <div className="app">
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<HomePage/>}/>
      </Routes>
        
      </div>
   
  )
}

export default App
