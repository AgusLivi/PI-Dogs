import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux'; // Importa useDispatch y useSelector
import './HomeModule.css'
import {
  filterByTemperament, 
  orderDogs,
  dogsOrigin,
  setSelectedTemperaments,
  resetAllFilters
} from '../../Redux/action'; // Importa las acciones necesarias

function HomePage() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperament); // Supongamos que tienes una lista de temperamentos en tu estado de Redux
 
  // Estados locales para los selectores
  const [selectedTemperament, setSelectedTemperament] = useState(''); // Estado para el selector de temperamento
  const [selectedOrder, setSelectedOrder] = useState(''); // Estado para el selector de orden
  const [selectedOrigin, setSelectedOrigin] = useState('')
  // Función para aplicar el filtro de temperamento
  const handleTemperamentChange = (value) => {
    dispatch(setSelectedTemperaments([value]))
    setSelectedTemperament(value); // Actualiza el estado local del selector
    dispatch(filterByTemperament([value])); // Despacha una acción para aplicar el filtro en el estado de Redux
  };

  const handleOrderChange = (value) => {
    setSelectedOrder(value); // Actualiza el estado local del selector
    dispatch(orderDogs(value));
 // Despacha una acción para aplicar el filtro en el estado de Redux
  };
  const filterOrigin = (e) => {
    const { value } = e.target;
    dispatch(dogsOrigin(value));
    setSelectedOrigin(value)
  };
  const handleResetFilters = () => {
    dispatch(resetAllFilters())
    setSelectedTemperament('')
    setSelectedOrder('')
    setSelectedOrigin('')
  }


 

  return (
    <div>
      <SearchBar />
  
      <select
        className="select"
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

     

      
      <select className='select'
        onChange={(e) => handleOrderChange(e.target.value)}
        value={selectedOrder}
      >
        <option value="">Selecciona un orden</option>
        <option value="A - Z">A - Z</option>
        <option value="Z - A">Z - A</option>
        <option value="Ascending Weight">Ascending Weight</option>
        <option value="Descending Weight">Descending Weight</option>
       
      </select>

      <select className='select'
       name="Origin" onChange={filterOrigin}
      value={selectedOrigin}>
            <optgroup key="origin" label="Origin">
            <option value="">Selecciona un origen</option>
            <option value="api">API</option>
            <option value="db">DB</option>
           </optgroup>
          </select>

      <button className="button"
      onClick={handleResetFilters}>Restablecer Filtros</button>

        <Cards />
      
    </div>
  );
}

export default HomePage;