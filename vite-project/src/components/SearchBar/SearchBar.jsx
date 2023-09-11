import React, {useState, useEffect} from 'react';
import { getDogsByName } from '../../Redux/action';
import { useDispatch } from 'react-redux'
import './SearchBarModule.css'

 const SearchBar = ()=>{

    const [search, setSearch] = useState('');
    
    const dispatch = useDispatch()


    const handleSearch = (e) => {
      const searchTerm = e.target.value; // Obtén el valor del cuadro de búsqueda desde el evento
      setSearch(searchTerm); // Actualiza el estado local con la cadena de búsqueda
    };

   const searchDogs = () => {
      // Llama a la acción para buscar perros por nombre cuando se hace clic en el botón de búsqueda
      dispatch(getDogsByName(search));
    };

    return(
        <div className="home-page">
              <h1 className='titulo'>Busqueda de Razas de Perros</h1>
              <div>
                <input
                  type="text"
                  placeholder="Buscar por nombre"
                  value={search}
                  onChange={handleSearch} // Pasa la función handleSearch como manejador onChange
                />
                <button onClick={searchDogs}>Buscar</button>
              </div>
        </div>
    )
}


export default SearchBar 