import { ADD_ORDER } from "../actions/orderActions"
import Order from '../../models/Order';

const inititalState = {
    orders:[],
}

export default (state=inititalState, action)=>{
    switch (action.type){
        case ADD_ORDER:
            const newOrder = new Order(
                new Date().toString(),
                action.items,
                action.totalAmount,
                new Date(),
                );
            return {
                ...state,
                orders:state.orders.concat(newOrder),
            }
    }
    return state;
}