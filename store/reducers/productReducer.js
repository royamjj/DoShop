import PRODUCTS from "../../data/dummyData";



const initialState = {
    availableProducts : PRODUCTS,
    userProducts :PRODUCTS.filter(p => p.ownerid==='u1'),
}

export default (state=initialState,action) => {
    return state;
}