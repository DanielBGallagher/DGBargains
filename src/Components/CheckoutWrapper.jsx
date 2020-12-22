import React from 'react';
import CheckoutPage from '../pages/CheckoutPage';
import '../styles/CheckoutWrapper.css';

const CheckoutWrapper = props => {


    return(
        <div className="checkout-wrapper">
            {props.children}
        </div>
    )
}


export default CheckoutWrapper;