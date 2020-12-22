import React from 'react';
import Landing from '../pages/Landing';
import ProductPage from '../pages/ProductPage';
import CheckoutPage from '../pages/CheckoutPage';
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';

const NavBar = props => {


    return (
    <Router> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <a className="navbar-brand" href="">DG Bargains</a>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <Link to="/product">
                    <button type="button" class="btn btn-outline-secondary">Shopping</button>
                </Link>
            </div>
            <Link to="/checkout">
                <div className="checkout">
                    <img src={props.img} alt="checkout"></img>
                </div>
            </Link>
        </nav>
        <Switch>
            <Route path="/product" component={ProductPage} ></Route>
            <Route path="/checkout" component={CheckoutPage}></Route>
            <Route exact path="/" component={Landing}></Route>
        </Switch>
    </Router>
    )
}
export default NavBar;