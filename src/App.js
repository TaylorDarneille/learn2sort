import React, { Component } from 'react';
import './App.css';
import SORTS from './SORTS.js';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav sort={SORTS.sorts}/>
      </div>
    );
  }
}

export default App;
