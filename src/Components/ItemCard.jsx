import React from 'react';
import '../styles/ItemCard.css'

const ItemCard = props => {

    const handleClick = (e)=>{
        // this.props.addToCard(id);
        props.addItem(props.id)
        console.log(props.id)
    }

    return (
    <div 
    className="card" 
    style={{ width: props.width, padding: "20px"}}>
        <h5 
        className="card-title">{props.title}</h5>
        <img 
        src={props.img} 
        className="card-img" 
        alt={props.name}/>
        <div 
        className="card-body">
            <p><span>Price:</span> ${props.price} </p>
            <a 
            className="btn btn-primary" 
            onClick={handleClick}>Add to Cart</a>
        </div>
    </div>
    )
}



export default ItemCard;