import { ADD_TO_CART, ADD_QUANTITY, SUB_QUANTITY, REMOVE_FROM_CART, EMPTY_CART
} from '../actionTypes';


const initialState = {
    items:[],
    total: 0
};

export const addToCart = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            //console.log("addtocart reducer")
            let itemExists = action.cart.find(item => item.id === action.id)
            if(itemExists){
                itemExists.quantity++
                return {
                    ...state,
                    total: state.total+ action.itemTotal
                }
            }
            return {
                ...state,
                items: [...state.items, 
                    {
                        id: action.id,
                        quantity: 1
                    
                    }
                ],
                total: state.total + action.itemTotal
            }
        case ADD_QUANTITY:
            //console.log("addq reducer")
            let addItem = action.cart.find(item => item.id === action.id)
            addItem.quantity++
            return {
                ...state,
                total: state.total + action.itemTotal
            }
        case SUB_QUANTITY:
            let subItem = action.cart.find(item => item.id === action.id)

            if(subItem.quantity > 1){
                subItem.quantity--
                return {
                    ...state,
                    total: state.total - action.itemTotal
                }
            }else {
                return state;
            }
        case REMOVE_FROM_CART:
            const newCart = action.cart.filter(item => item.id !== action.id)

            return {
                ...state,
                items: newCart,
                total: state.total - action.itemTotal
            }
        case EMPTY_CART:
            console.log("empty cart reducer")
            return {
                items: [],
                total: 0
            }


        default:
            return state
    }
}

