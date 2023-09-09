import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams();
  const [dogData, setDogData] = useState(null);
  
  useEffect(()=>{
    const fetchDogData = async () => {
      try {
        const response = await axios(`http://localhost:3001/dogs/${id}`)
        const data = response.data;
        setDogData(data);
      } catch (error) {
        console.error('error al obtener detalles del perro')
      }
    }
    fetchDogData
  }, [id])
  return (
    <div>
    {dogData ? (
      <>
        <h1>ID: {dogData.id}</h1>
        <img src={dogData.image} alt={dogData.name} />
        <h2>Nombre: {dogData.name}</h2>
        <p>Altura: {dogData.height} cm</p>
        <p>Peso: {dogData.weight} kg</p>
        <p>Temperamentos: {dogData.temperaments.join(', ')}</p>
        <p>Años de vida: {dogData.lifespan}</p>
      </>
    ) : (
      <p>Cargando datos del perro...</p>
    )}
  </div>
  )
}

export default Detail