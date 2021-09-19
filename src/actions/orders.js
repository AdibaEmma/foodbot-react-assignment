import * as api from '../api'
import { FETCH_ORDERS } from '../constants'

export const order_details = () => async dispatch => {
    try {
        const { data } = await api.orderSummary()
        dispatch({ type: FETCH_ORDERS, payload: data })

    } catch (error) {
        console.log('There is an error:', error);
    }
}