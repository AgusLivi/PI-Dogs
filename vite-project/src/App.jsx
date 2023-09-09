import React from 'react'
import ReactDOM from 'react-dom'
import  HomePage  from './components/Home/Home'
import './App.css'
import Landing from './components/Landing/Landing'
import { Routes, Route } from 'react-router-dom'
import Cards from './components/Cards/Cards'
import SearchBar from './components/SearchBar/SearchBar'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'



function App() {
  

  return (
    
      <div className="app">
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/Cards" element={<Cards/>} />
        <Route path="/Search" element={<SearchBar/>}/>
        <Route path="/dogs/:id" element={<Detail/>} />
        <Route path="/form" element={<Form />} />
      </Routes>
        
      </div>
   
  )
}

export default App
