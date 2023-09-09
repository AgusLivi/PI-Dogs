import {
    CREATE_DOG,
    GET_ALL_DOGS, GET_TEMPERAMENTS, SEARCH_BY_NAME, 
} from './actionsTypes'
const initialState = {
    dogs: [],
    dogsCopy: [],
    temperaments: [],
    filteredNames: [],
}

const reducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: payload,
                dogsCopy: payload
            }
            case GET_TEMPERAMENTS: 
            return {
                ...state,
                temperaments: payload,
            }
            case SEARCH_BY_NAME: 
            return {
                ...state,
                dogs: payload
            }
            case CREATE_DOG:
                return {
                    ...state,
                    dogs: [...state.dogs, payload]
                }
            default:
                return state;
    }
}
 export default reducer