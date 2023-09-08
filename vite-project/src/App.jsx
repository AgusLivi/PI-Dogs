import React from 'react'
import ReactDOM from 'react-dom'
import  {HomePage}  from './components/Home/Home'
import './App.css'
import DogShow from './components/Card/ShowDogs'

function App() {
  

  return (
    
      <div className="app">
        <HomePage />
        <DogShow/>
      </div>
   
  )
}

export default App
