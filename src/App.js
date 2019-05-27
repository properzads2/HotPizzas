import React from 'react';
import { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import CustomizeMenu from './components/CustomizeMenu'
import Checkout from './components/Checkout'
import {BrowserRouter, Router, Link} from "react-router-dom"



// class App extends Component {

  // handleClick= () => {

  // }

  // render() {
  //   // return (
  //   //   <div> 
  
  //   //         <NavBar/>
  //   //         <Menu/>
  //   //         <CustomizeMenu/>
  //   //         <Checkout />
  //   //   </div>
  //   // );

    
  // }


  ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={Menu}/>
        <Route path="pizza/customize" component={CustomizeMenu}/>
        <Route path="pizza/checkout" component={Checkout}/>
    </BrowserRouter>
  )

// }

export default App;
