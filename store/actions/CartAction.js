export const ADD_TO_CART = 'ADD_TO_CART';


export const addToCart = pro =>{
    return {type:ADD_TO_CART, product:pro}
};