import * as api from '../api'
import { FETCH_ORDERS } from '../constants'

export const order_details = () => async dispatch => {
    try {
        const response = api.orderSummary()
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}