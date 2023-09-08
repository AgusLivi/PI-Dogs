import React, {useState} from 'react';
import { getDogsByName } from '../../Redux/action';

export const HomePage = ()=>{

    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        event.preventDefault()
		dispatch(searchDogsByName(search))
		setSearch('')
    }
  

    return(
        <div className="home-page">
            <form>
             <h1>Busqueda de Razas de Perros</h1>
              <div className="search-bar">
                <input
                type="text"
                paceholder="Buscar por nombre"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                />
                <button onClick={handleSearch}>Buscar</button>
              </div>
            </form>


        </div>



    )


}