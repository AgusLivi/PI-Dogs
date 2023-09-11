import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux'; // Importa useDispatch y useSelector

import {
  filterByTemperament,
  setSelectedOrigin, // Agrega setSelectedOrigin al import
  orderDogs,
} from '../../Redux/action'; // Importa las acciones necesarias

function HomePage() {
  const dispatch = useDispatch();
  const filteredDogs = useSelector((state) => state.dogs); // Accede a los resultados filtrados en el estado de Redux
  const temperaments = useSelector((state) => state.temperament); // Supongamos que tienes una lista de temperamentos en tu estado de Redux
  const originOptions = useSelector((state) => state.selectedOrigin);
  
  // Estados locales para los selectores
  const [selectedTemperament, setSelectedTemperament] = useState(''); // Estado para el selector de temperamento
  const [selectedOrigin, setSelectedOriginLocal] = useState(''); // Estado para el selector de origen
  const [selectedOrder, setSelectedOrder] = useState(''); // Estado para el selector de orden

  // Función para aplicar el filtro de temperamento
  const handleTemperamentChange = (value) => {
    setSelectedTemperament(value); // Actualiza el estado local del selector
    dispatch(filterByTemperament([value])); // Despacha una acción para aplicar el filtro en el estado de Redux
  };

  // Función para aplicar el filtro de origen
  const handleOriginChange = (value) => {
    setSelectedOriginLocal(value);
    dispatch(setSelectedOrigin(value));
  };
  const handleOrderChange = (value) => {
    setSelectedOrder(value); // Actualiza el estado local del selector
    dispatch(orderDogs(value)); // Despacha una acción para aplicar el filtro en el estado de Redux
  };


 

  return (
    <div>
      <SearchBar />

      {/* Selector de temperamento */}
      <select
        onChange={(e) => handleTemperamentChange(e.target.value)}
        value={selectedTemperament}
      >
        <option value="">Selecciona un temperamento</option>
        {temperaments.map((temperament) => (
          <option key={temperament} value={temperament}>
            {temperament}
          </option>
        ))}
      </select>

      {/* Selector de origen */}
      <select
        onChange={(e) => handleOriginChange(e.target.value)}
        value={selectedOrigin}
      >
        <option value="">Selecciona un origen</option>
        {originOptions.map((origin) => (
          <option key={origin} value={origin}>
            {origin}
          </option>
        ))}
      </select>

      {/* Selector de orden */}
      <select
        onChange={(e) => handleOrderChange(e.target.value)}
        value={selectedOrder}
      >
        <option value="">Selecciona un orden</option>
        <option value="A - Z">A - Z</option>
        <option value="Z - A">Z - A</option>
        {/* Agrega más opciones de orden según tus necesidades */}
      </select>

      
        <Cards />
      
    </div>
  );
}

export default HomePage;