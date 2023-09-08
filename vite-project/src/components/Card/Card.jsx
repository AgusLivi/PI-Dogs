import React from 'react'

const Card = ({name, id, weight, temperament, image}) => {

  return (
    <div>

        <h1>
            {name}
        </h1>
        <h1>{weight}</h1>
        <h1>{temperament}</h1>
        <img src={image}/>
                
    </div>
  )
}

export default Card