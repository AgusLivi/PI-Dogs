import React,{useEffect, useState} from 'react';
import { DogCard } from './Card';
import { useDispatch } from 'react-redux';
import { getAllDogs } from '../../Redux/action';

const DogShow = () => {
    const dispatch = useDispatch()
    const [dogs, setDogs] = useState([])

    useEffect(()=>{
        dispatch(getAllDogs())
    },[dispatch])

    return (
        <div>
            {dogs.map((dog)=>(
                <DogCard key={dog.id} dog={dog} />
            ))}
        </div>
    )
}
export default DogShow