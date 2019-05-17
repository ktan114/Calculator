import React, { Component } from 'react';

import './App.css';
import { arithmetic, percentage } from './helpers/operations';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: 0,
      num1: null,
      operation: null,
    };
  }

  clickNumber = num => {
    const { display } = this.state;
    const addOnNumber =
      display === 0 ? num : parseInt(display.toString() + `${num}`);
    this.setState({ display: addOnNumber });
  };

  clickOperation = operation => {
    const num1 = this.state.num1;
    if (operation === 'percent')
      this.setState({ display: num1 / 100, operation: 'percent' });
    else this.setState({ operation: operation });
  };

  render() {
    const { display } = this.state;
    return (
      <div className="App">
        Calculator
        <div>{display}</div>
        <div>
          <button onClick={() => this.clickNumber(0)}>0</button>
          <button onClick={() => this.clickNumber(1)}>1</button>
          <button onClick={() => this.clickNumber(2)}>2</button>
          <button onClick={() => this.clickNumber(3)}>3</button>
          <button onClick={() => this.clickNumber(4)}>4</button>
          <button onClick={() => this.clickNumber(5)}>5</button>
          <button onClick={() => this.clickNumber(6)}>6</button>
          <button onClick={() => this.clickNumber(7)}>7</button>
          <button onClick={() => this.clickNumber(8)}>8</button>
          <button onClick={() => this.clickNumber(9)}>9</button>
        </div>
        <div>
          <button>Clear</button>
          <button onClick={() => this.clickOperation('add')}>+</button>
          <button onClick={() => this.clickOperation('subtract')}>-</button>
          <button onClick={() => this.clickOperation('multiply')}>*</button>
          <button onClick={() => this.clickOperation('divide')}>/</button>
          <button onClick={() => this.clickOperation('percent')}>%</button>
          <button onClick={() => this.clickOperation('add')}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
