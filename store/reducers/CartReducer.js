import { ADD_TO_CART } from "../actions/CartAction";
import CartItem from '../../models/CartItem';

const initianlState = {
    items:{},
    totalAmount:0,
};



export default (state=initianlState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const addedProduct = action.product;
            const price = addedProduct.price;
            const title = addedProduct.title;

            let lastestItem;

            if(state.items[addedProduct.id]){
                lastestItem = new CartItem(
                    state.items[addedProduct.id].quantity+1,
                    price,
                    title,
                    state.items[addedProduct.sum]+price
                )
            }else{
                lastestItem = new CartItem(1,price,title,price,price);
            }
            return{
                items:{...state.items, [addedProduct.id]:lastestItem},
                totalAmount:state.totalAmount+price,
                }
            }
    return state;
}


