import React from 'react';
import '../styles/CheckoutCard.css';
import xOut from '../img/x.png';

const CheckoutCard = props => {

    const handleAddQuantity = (e)=>{
        e.preventDefault()
        props.addQuantity(props.id)
    }

    const handleSubQuantity = (e)=>{
        e.preventDefault()
        props.subQuantity(props.id)
    }

    const handleRemoveItem = (e)=>{
        e.preventDefault()
        props.removeFromCart(props.id)
    }

    return (
        <div 
        className="card-container">
            <div 
            className="top-right">
                <a 
                href=""
                onClick={handleRemoveItem}
                ><img 
                    className="x-out" 
                    src={xOut} 
                    alt="remove"></img></a>
            </div>
            <div 
            className="item-left">
                <img 
                className="prod-img" 
                src={props.img} 
                alt={props.name}></img>
                <h4>{props.name}</h4>
            </div>
            <div 
            className="item-right">
                <div 
                className="price">
                    Price: ${props.price}<br></br>
                    # of Items: {props.quantity}<br></br>
                    <span 
                    className="totalPrice">Item Total: ${props.quantity * props.price}</span>
                </div>
            </div>
            <div 
            className="quantity">
                <button 
                type="button" 
                className="btn btn-success"
                onClick={handleAddQuantity}
                >+</button>

                <h5>Quantity: {props.quantity}</h5>

                <button 
                type="button" 
                className="btn btn-danger"
                onClick={handleSubQuantity}
                >-</button>
            </div>
            <hr></hr>
            
        </div>
    )
}

export default CheckoutCard;