import { ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY, ADD_QUANTITY, EMPTY_CART } from './actionTypes';
import store from './store';


export const addToCart = id => {
  console.log("addtocart action")
  const cart = store.getState().cart.items;
  const itemTotal = store.getState().productList.find(item => id === item.id).price;
    return {
      type: ADD_TO_CART,
      id,
      itemTotal,
      cart 
    };
  };
  export const removeFromCart = id => {
    const cart = store.getState().cart.items;
    const itemTotal = store.getState().productList.find(item => id === item.id).price;
    return {
      type: REMOVE_FROM_CART,
      id,
      cart,
      itemTotal
    };
  };
  export const subQuantity = id => {
    const cart = store.getState().cart.items;
    const itemTotal = store.getState().productList.find(item => id === item.id).price
    return {
      type: SUB_QUANTITY,
      id,
      cart,
      itemTotal
    };
  };
  export const addQuantity = id => {
    const cart = store.getState().cart.items;
    const itemTotal = store.getState().productList.find(item => id === item.id).price;
    return {
      type: ADD_QUANTITY,
      id,
      cart,
      itemTotal

    };
  };
  export const emptyCart = () => {
    console.log("empty cart action")
    return {
      type: EMPTY_CART,
    };
  };

