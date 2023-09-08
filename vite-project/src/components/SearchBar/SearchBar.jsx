import React, {useState} from 'react';
import { getDogsByName } from '../../Redux/action';
import { useDispatch } from 'react-redux'

 const SearchBar = ()=>{

    const [search, setSearch] = useState('');

    const dispatch = useDispatch()

    const inputHandler = (e) => {
      setSearch(e.target.value);
    };
  
    const handleSubmit = () => {
      dispatch(getDogsByName(search));
    };

    return(
        <div className="home-page">
            <form>
             <h1>Busqueda de Razas de Perros</h1>
              <div className="search-bar">
                <input
                type="search"
                value={search}
                onChange={inputHandler}
                />
                <button onClick={handleSubmit}>Buscar</button>
              </div>
            </form>


        </div>



    )


}


export default SearchBar 