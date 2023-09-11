import {
    CREATE_DOG,
    GET_ALL_DOGS,
     GET_TEMPERAMENTS,
      SEARCH_BY_NAME, 
      SELECTED_ORDER, 
      SELECTED_ORIGIN,
       SELECTED_TEMPERAMENTS,
        ORDER_DOGS, 
        FILTERED_BY_TEMPERAMENT,
         ORIGIN,
         RESET_ALL_FILTERS,
         CURRENT_PAGE,
} from './actionsTypes'
import { ascendingOrder, descendingOrder } from './Filters/Order'
import { filterByName, filterMaster } from './Filters/Filters'

const initialState = {
    dogs: [],
    dogsCopy: [],
    temperament: [],
    filteredNames: [],
    createdDogs: [],
    allDogsWheGet: [],
    selectedTemperaments: [],
    selectedOrigin: [],
    selectedOrder: [],
    currentPage: 1,
}

const reducer = (state = initialState, {type, payload}) =>{
    let orderedDogs = []
	let orderedCopy = []
	let filteredDogs = []
    switch(type){
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: payload,
                dogsCopy: payload,
                filteredNames: payload,
                allDogsWheGet: [...payload]

            }
            case RESET_ALL_FILTERS:
                return{
                    ...state,
                    selectedTemperaments: payload,
                    selectedOrigin: payload,
                    selectedOrder: payload,
                    dogs: [...state.allDogsWheGet],
                    dogsCopy: [...state.allDogsWheGet],
                    filteredNames: [...state.allDogsWheGet],
                    currentPage: 1,
                }
            case GET_TEMPERAMENTS: 
            return {
                ...state,
                temperament: payload,
            }
            case SEARCH_BY_NAME: 
            filteredDogs = filterByName(state.dogs, payload)
            return {
                ...state,
                dogs: filteredDogs,
                filteredNames: filteredDogs,
                currentPage: 1,
            }
            case CREATE_DOG:
                return {
                    ...state,
                    createdDogs: [...state.createdDogs, payload]
                    
                }
            case SELECTED_TEMPERAMENTS: 
            return {
                ...state,
                selectedOrder: [...payload],
            }
            case SELECTED_ORDER:
                return {
                    ...state,
                    selectedOrigin: [...payload],
                }
                case SELECTED_ORIGIN:
			return {
				...state,
				selectedOrigin: [...payload],
			}
            case FILTERED_BY_TEMPERAMENT:
                if (payload.length && payload !== 'error') {
                    filteredDogs = filterMaster(state.dogsCopy, [
                        state.selectedTemperaments,
                        state.selectedOrigin,
                    ])
                    return {
                        ...state,
                        dogs: filteredDogs,
                        filteredNames: filteredDogs,
                        currentPage: 1,
                    }
                } else {
                    filteredDogs = filterMaster(state.dogsCopy, [
                        [],
                        state.selectedOrigin,
                    ])
                    return {
                        ...state,
                        dogs: filteredDogs,
                        filteredNames: filteredDogs,
                        selectedTemperaments: [],
                        currentPage: 1,

                    }
                }
                case ORDER_DOGS:
			if (payload === 'A - Z' || !payload.length) {
				orderedDogs = ascendingOrder(state.dogs, 'name')
				orderedCopy = ascendingOrder(state.dogsCopy, 'name')
			} else if (payload === 'Z - A') {
				orderedDogs = descendingOrder(state.dogs, 'name')
				orderedCopy = descendingOrder(state.dogsCopy, 'name')
			} else if (payload === 'Ascending Weight') {
				orderedDogs = ascendingOrder(state.dogs, 'weight')
				orderedCopy = ascendingOrder(state.dogsCopy, 'weight')
			} else if (payload === 'Descending Weight') {
				orderedDogs = descendingOrder(state.dogs, 'weight')
				orderedCopy = descendingOrder(state.dogsCopy, 'weight')
			}
			return {
				...state,
				dogs: orderedDogs,
				filteredNames: orderedDogs,
				dogsCopy: orderedCopy,
				selectedOrder: payload.length
					? [{ value: payload, label: payload }]
					: [],
                    currentPage: 1,
				
			}
            case ORIGIN:
			if (payload === 'Only API Dogs') {
				filteredDogs = filterMaster(state.dogsCopy, [
					state.selectedTemperaments,
					state.selectedOrigin,
				])
				return {
					...state,
					dogs: filteredDogs,
					filteredNames: filteredDogs,
                    currentPage: 1,
					
				}
			}
			if (payload === 'Only Created Dogs') {
				filteredDogs = filterMaster(state.dogsCopy, [
					state.selectedTemperaments,
					state.selectedOrigin,
				])
				return {
					...state,
					dogs: filteredDogs,
					filteredNames: filteredDogs,
                    currentPage: 1,
					
				}
			} else {
				filteredDogs = filterMaster(state.dogsCopy, [
					state.selectedTemperaments,
					[],
				])
				return {
					...state,
					selectedOrigin: [],
					dogs: filteredDogs,
					filteredNames: filteredDogs,
                    currentPage: 1,
					
				}
			}
            case CURRENT_PAGE:
			return {
				...state,
				currentPage: payload,
			}

            
            default:
                return state;
    }
}
 export default reducer