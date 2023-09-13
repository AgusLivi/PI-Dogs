import React from 'react'
import { Link } from 'react-router-dom';
import './CardModule.css'

const Card = ({name, id, weight,weight2, temperament, image }) => {

  let temperamentList = [];

 
  if (typeof temperament === 'string') {

    temperamentList = temperament.split(',').map(temperamentName => ({ name: temperamentName.trim() }));
  } else if (Array.isArray(temperament)) {

    temperamentList = temperament;
  } else if (Array.isArray(temperament)) {

    temperamentList = temperament;
  }
  const tempList = temperamentList.map(temperament => temperament.name).join(', ');


  return (
    <div className='card'>


        <h1>{name}</h1>
        <h1>{weight}</h1>
        <h1>{weight2}</h1>
        <h1>{tempList}</h1>
        <img src={image} alt={name}/>
        <Link to={`/dogs/${id}`}>Ver detalle</Link>
                
    </div>
  )
}

export default Card
{/* <h1>{typeof temperament === "string" ? temperament : temperament.map(temp => temp.name).join(', ')}</h1> */}