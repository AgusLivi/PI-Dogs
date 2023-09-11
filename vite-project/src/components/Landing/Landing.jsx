import React from 'react'
import { Link } from 'react-router-dom'
import './LandingModule.css'



const Landing = () => {
  return (
    <div className='landing-container'>
        <h1 className='landing-title'>
            Dogs
        </h1>
        
        <Link to="/home" className='landing-button'>
     <button >Enter</button>
     </Link>

    </div>
  )
}

export default Landing