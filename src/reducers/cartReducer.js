import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const initialState = {
    cartItems: []
}

export default function cartReducer(state=initialState,action){
    switch(action.type){
        case ADD_TO_CART:
        return{
            ...state,
            cartItems: [...state.cartItems,action.payload]

        }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.slice(0, -1),
              };
        default:
            return state;
    }
}
