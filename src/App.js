import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import shopIMG from './img/48_cart.png';
import './styles/App.css'



function App() {


  
  return (
    <>
    <div className ='container'>
      <NavBar img={shopIMG}></NavBar>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
