import CheckoutCard from '../Components/CheckoutCard';
import React from 'react';
import CheckoutWrapper from '../Components/CheckoutWrapper'
import { 
    connect, 
    useDispatch, 
    useSelector } from 'react-redux';
import { emptyCart, addQuantity, subQuantity, removeFromCart } from '../redux/actions'

import '../styles/CheckoutPage.css'
const CheckoutPage = props => {
    const cartItems = useSelector(state => state.cart.items)
    const cartTotal = useSelector(state=> state.cart.total)
    const products = useSelector(state => state.productList)
    const dispatch = useDispatch()


        const itemsInCart = cartItems.map(item=> {
            for(let i = 0; i < products.length; i++){
                if(item.id === products[i].id){
                    return <CheckoutCard 
                    key = {products[i].id}
                    id={products[i].id}
                    name = {products[i].name}
                    price = {products[i].price}
                    img = {products[i].image}
                    quantity = {item.quantity}
                    addQuantity={id => dispatch(addQuantity(id))}
                    subQuantity={id => dispatch(subQuantity(id))}
                    removeFromCart={id => dispatch(removeFromCart(id))}
                    ></CheckoutCard>
                }
            }
        })
    return (
        <>
            <CheckoutWrapper>
                {itemsInCart}
            </CheckoutWrapper>
            <div className="total">
                <h4>Total: ${cartTotal}</h4>
                <button 
                type="button" 
                className="btn btn-info"
                onClick={()=> dispatch(emptyCart())}
                >Empty Cart</button>
            </div>

            
        </>
    )
}
const mapStateToProps = (state)=>{
    
    return {
        items: state.cart
    }
}
const mapDispatchToProps = (dispatch)=> {
    return{
        addQuantity: id=> {dispatch(addQuantity(id))},
        subQuantity: id=> {dispatch(subQuantity(id))},
        removeFromCart: id=> {dispatch(removeFromCart(id))},
        emptyCart: () => dispatch(emptyCart)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);