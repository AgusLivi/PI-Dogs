import axios from 'axios';
import { GET_TEMPERAMENTS, GET_ALL_DOGS, SEARCH_BY_NAME, CREATE_DOG } from './actionsTypes';    


const endPointDog='http://localhost:3001/dogs'
const endPointTemperament='http://localhost:3001/dogs/temperament/:temperament'

export const getAllDogs = () => {
    return async dispatch => {
        try {
            const { data } = await axios(endPointDog)
            return dispatch({
                type: GET_ALL_DOGS,
                payload: data
            })
        } catch (error){
            alert(error.message)
        }
    }
}

export const getTemperaments = ()=>{
    return async dispatch => {
        try {
            const { data } = await axios(endPointTemperament)
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: data
            })
        } catch(error){
            alert(error.message)
        }
    }
}

export const getDogsByName = search => {
    return async dispatch => {
        try {
            const { data } = await axios(`${endPointDog}/name?name=${search}`)
            console.log(data);
            return dispatch({
                type: SEARCH_BY_NAME,
                payload: data,
            })

        } catch (error){
            alert('No se encontraron razas con ese nombre')
        }
    }
}

export const createDog = (formData)=>{
    return async (dispatch)=>{
        try{
            const { data } = await axios.post('http://localhost:3001/create', formData);
            return dispatch({
                type: CREATE_DOG,
                payload: data
            })
        }catch (error){
            console.error('Error al crear raza de perro')
        }
       
    }
}