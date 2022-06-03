export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const addToCart = pro =>{
    return {type:ADD_TO_CART, product:pro}
};


export const deleteFromCart = prodID =>{
    return {type: DELETE_FROM_CART, prodID:prodID}
}