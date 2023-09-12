import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Detail = () => {
  const [dog, setDog] = useState({})
	const [error, setError] = useState(false)
  const { id } = useParams();
  console.log(id)
  // const [dogData, setDogData] = useState(null);
  
  const request = async () => {
		try {
			const { data } = await axios(`http://localhost:3001/dogs/${id}`)
			setDog(data)
		} catch (error) {
			setError(true)
			alert('No breed matches the searched id')
		}
	}
  useEffect(() => {
		request()
	}, [])
  const {
		name,
    reference_image_id,
		weight,
		height,
		bred_for,
		breed_group,
		life_span,
		temperament,
		origin,
    image,
    weight_max,
    weight_min
	} = dog
  console.log(dog.weight_max)

  return (
    <div>
    {dog ? (
      <>
        <h1>ID: {id}</h1>
        {isNaN(id)? <img src={image} alt={"cargando"}/> :
        <img src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`} alt={name} />
        }
        <h2>Nombre: {name}</h2>
        {height && (
          <>
            <p>Altura Imperial: {height.imperial} inches</p>
            <p>Altura Métrica: {height.metric} cm</p>
          </>
        )}
        {weight && (
          <>
            <p>Peso Imperial: {weight.imperial}</p>
            <p>Peso Métrico: {weight.metric}</p>
            
          </>
        )}
        {weight_min && (
          <p>Peso Minimo: {weight_min}</p>
        )}
        {weight_max && (
          <p>Peso Maximo: {weight_max}</p>
        )}
        {life_span && (
          <p>Esperanza de Vida: {life_span}</p>
        )}
      </>
    ) : (
      <p>Cargando datos del perro...</p>
    )}
  </div>
  )
}

export default Detail