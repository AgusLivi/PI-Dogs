import React from 'react'
import { Link } from 'react-router-dom';
import './CardModule.css'

const Card = ({name, id, weight, temperament, image}) => {

  return (
    <div className='card'>

        <h1>{name}</h1>
        <h1>{weight}</h1>
        <h1>{temperament}</h1>
        <img src={image} alt={name}/>
        <Link to={`/dogs/${id}`}>Ver detalle</Link>
                
    </div>
  )
}

export default Card