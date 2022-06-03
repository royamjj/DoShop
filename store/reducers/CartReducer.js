import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/CartAction";
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
                    state.items[addedProduct.id].sum+price
                )
            }else{
                lastestItem = new CartItem(1,price,title,price,price);
            }
            return{
                items:{...state.items, [addedProduct.id]:lastestItem},
                totalAmount:state.totalAmount+price,
            }
                break;
                

        case DELETE_FROM_CART:
            let newItems;
            const itemToBeDel = state.items[action.prodID];
            const quant = itemToBeDel.quantity;
            if(quant>1){
                const temp = new CartItem(
                    itemToBeDel.quantity-1,
                    itemToBeDel.price,
                    itemToBeDel.title,
                    itemToBeDel.sum- itemToBeDel.price,
                )
                newItems = {...state.items, [action.prodID]:temp}
            }else{
                newItems = {...state.items};
                delete newItems[action.prodID];
            }
            return{
                items:newItems,
                totalAmount:state.totalAmount-itemToBeDel.price
            }
            break;
            
    }

    return state;
}


