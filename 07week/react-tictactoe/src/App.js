import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      return (
        <div>
          <div className="row">
            <div className="cellBox"></div>
            <div className="cellBox"></div>
            <div className="cellBox"></div>
          </div>
          <div className="row">
            <div className="cellBox"></div>
            <div className="cellBox"></div>
            <div className="cellBox"></div>
          </div>
          <div className="row">
            <div className="cellBox"></div>
            <div className="cellBox"></div>
            <div className="cellBox"></div>
          </div>
        </div>
      );
  }
}

export default App;
