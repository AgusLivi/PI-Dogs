import React from "react";

export const DogCard = ({dog}) => {
    return (
        <div>
            <img src={dog.image} alt={dog.name}/>
            <h2>{dog.name}</h2>
            <p>Temperamentos: {dog.temperaments.join(', ')}</p>
            <p>Peso: {dog.weight}</p>
        </div>
    )
}