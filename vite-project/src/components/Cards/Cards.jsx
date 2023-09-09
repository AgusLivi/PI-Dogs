import { all } from 'axios';
import { getAllDogs } from '../../Redux/action'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';

const Cards = () => {
    const dispatch = useDispatch();

    const allDogs = useSelector((state)=>state.dogs)



    useEffect(() => {
        dispatch(getAllDogs())

      }, [dispatch])

      

console.log(allDogs);
    
  return (
    <div>
        {
            allDogs.map((dog) => (
              <Card
                key={dog?.id}
                id={dog?.id}
                name={dog?.name}
                temperament={dog?.temperament}
                weight={dog?.weight?.metric} // Usa ? para weight.metric si es necesario
                image={dog?.image?.url} // Usa ? para image.url si es necesario
              />
            ))

        }
    </div>
  )
}

export default Cards