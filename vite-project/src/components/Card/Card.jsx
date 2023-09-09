import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({name, id, weight, temperament, image}) => {

  return (
    <div>

        <h1>{name}</h1>
        <h1>{weight}</h1>
        <h1>{temperament}</h1>
        <img src={image} alt={name}/>
        <Link to={`/dog/${id}`}>Ver detalle</Link>
                
    </div>
  )
}

export default Card