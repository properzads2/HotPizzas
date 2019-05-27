import React from 'react';
import { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import CustomizeMenu from './components/CustomizeMenu'
import Checkout from './components/Checkout'
import Maincontainer from './components/Maincontainer'

class App extends Component {

  handleClick= () => {

  }

  render() {
    return (
      <div> 
            <Maincontainer/>
            {/* <NavBar/>
            <Menu/>
            <CustomizeMenu/>
            <Checkout /> */}
      </div>
    );
  }
}

export default App;
