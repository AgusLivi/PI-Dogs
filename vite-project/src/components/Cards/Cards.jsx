import { getAllDogs } from '../../Redux/action'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import './CardsModule.css'
import { setCurrentPage, getTemperaments } from '../../Redux/action';
const Cards = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector((state)=>state.dogs)
    const elementosPorPagina = 15;
    const paginaActual = useSelector((state)=> state.currentPage)
    



    useEffect(() => {
        dispatch(getAllDogs())
        dispatch(getTemperaments())

      }, [dispatch])

        // Función para mostrar los perros de la página actual
        const mostrarPerrosEnPagina = () => {
          const inicio = (paginaActual - 1) * elementosPorPagina;
          const fin = inicio + elementosPorPagina;
          
          return allDogs.slice(inicio, fin);
        };
  const irAPaginaAnterior = () => {
    if (paginaActual > 1) {
      const nuevaPagina = paginaActual - 1;
      // Utiliza la acción setCurrentPage para actualizar la página actual
      dispatch(setCurrentPage(nuevaPagina));
    }
  };
  const irAPaginaSiguiente = () => {
    const totalPaginas = Math.ceil(allDogs.length / elementosPorPagina);
    if (paginaActual < totalPaginas) {
      const nuevaPagina = paginaActual + 1;
      // Utiliza la acción setCurrentPage para actualizar la página actual
      dispatch(setCurrentPage(nuevaPagina));
    }
  };



 
return (
  <div className="cards-container">
    {mostrarPerrosEnPagina().map((dog) => (
      <Card
        key={dog?.id}
        id={dog?.id}
        name={dog?.name}
        temperament={dog?.temperament}
        weight={dog?.weight?.metric}
        image={dog?.image?.url}
      />
    ))}

    <div className="pagination-controls">
      <button className="pagination-btn" onClick={() => irAPaginaAnterior()}>
        Anterior
      </button>
      <span>Página {paginaActual}</span>
      <button className="pagination-btn" onClick={() => irAPaginaSiguiente()}>
        Siguiente
      </button>
    </div>
  </div>
)
}

export default Cards