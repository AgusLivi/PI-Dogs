import axios from 'axios';

 const GET_ALL_DOGS = 'GET_ALL_DOGS'
 const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
 const SEARCH_BY_NAME = 'SEARCH_BY_NAME'

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
            const { data } = await axios(`${endPointDog}?name=${search}`)
            return dispatch({
                type: SEARCH_BY_NAME,
                payload: data,
            })

        } catch (error){
            alert('No se encontraron razas con ese nombre')
        }
    }
}