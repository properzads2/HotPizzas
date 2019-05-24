import React from 'react';
import { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Menu from './components/Menu'


class App extends Component {

  handleClick= () => {

  }

  render() {
    return (
      <div> 
  
            <NavBar/>
            <Menu/>
      </div>
    );
  }
}

export default App;
