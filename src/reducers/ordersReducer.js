/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ORDERS } from "../constants";

export default (state ={}, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return action.payload  
    
        default:
            return state
    }
}