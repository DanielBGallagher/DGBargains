import productList from './productlist';
import {addToCart} from './cart';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    productList,
    cart: addToCart
})


export default allReducers;