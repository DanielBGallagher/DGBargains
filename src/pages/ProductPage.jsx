import ItemCard from '../Components/ItemCard';
import React from 'react';
import '../styles/ProductPage.css'
import { connect, useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions'




const ProductPage = props => {
    
    const products = useSelector(state => state.productList)
    const dispatch = useDispatch()
    
        const itemCards = products.map(item => <ItemCard 
            key={item.id} 
            id={item.id} 
            title={item.name} 
            img ={item.image} 
            width="20rem" 
            price={item.price} 
            addItem={ id => dispatch(addToCart(id))}></ItemCard>)

        return (
            <div className="products">{itemCards}</div>
        )
    
}



const mapStateToProps = (state)=>{

    return {
        items: state.productList
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addToCart: id => {dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);




