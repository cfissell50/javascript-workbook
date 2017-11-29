import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // every return keep track of player turn default x, if div is empty then place player turn, then check for win
  // if user clicks put playerturn down if no win, switch players
  // check for win

  state = {
    playerTurn: 'X',
    grid: {},
  }

  handleClickEvent(cell){
    if(!this.state.grid[cell]){
      const newGrid = {...this.state.grid};
      newGrid[cell] = this.state.playerTurn;
      const playerTurn = this.state.playerTurn === 'X' ? 'O' : 'X';
      this.setState({grid: newGrid, playerTurn})
    }
  }

  render() {
      return (
        <div>
          <div className="row">
            <div className="cellBox" onClick={() => this.handleClickEvent(0)}>{this.state.grid[0]}</div>
            <div className="cellBox" onClick={() => this.handleClickEvent(1)}>{this.state.grid[1]}</div>
            <div className="cellBox" onClick={() => this.handleClickEvent(2)}>{this.state.grid[2]}</div>
          </div>
          <div className="row">
            <div className="cellBox" onClick={() => this.handleClickEvent(3)}>{this.state.grid[3]}</div>
            <div className="cellBox" onClick={() => this.handleClickEvent(4)}>{this.state.grid[4]}</div>
            <div className="cellBox" onClick={() => this.handleClickEvent(5)}>{this.state.grid[5]}</div>
          </div>
          <div className="row">
            <div className="cellBox" onClick={() => this.handleClickEvent(6)}>{this.state.grid[6]}</div>
            <div className="cellBox" onClick={() => this.handleClickEvent(7)}>{this.state.grid[7]}</div>
            <div className="cellBox" onClick={() => this.handleClickEvent(8)}>{this.state.grid[8]}</div>
          </div>
        </div>
      );
  }
}

export default App;
