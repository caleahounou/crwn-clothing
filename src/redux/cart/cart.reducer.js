import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

//defintion des states  pour notre application
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        //modification du state hidden qui controle l'afffichage ou non du panier
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        
        //Ajout des produits dasn notre panier 
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;