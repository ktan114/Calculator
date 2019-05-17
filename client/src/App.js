import React, { Component } from 'react';

import './App.css';
import { arithmetic, percentage } from './helpers/operations';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: 0,
      placeholder: 0,
      operation: null,
      equal: false,
    };
  }

  clickNumber = num => {
    const { display, operation, equal } = this.state;
    if (operation) this.setState({ display: num, placeholder: num });
    else {
      const addOnNumber =
        display === 0 ? num : parseInt(display.toString() + `${num}`);
      this.setState({ display: addOnNumber });
    }
  };

  clickOperation = op => {
    const { display, operation, placeholder } = this.state;
    if (op === 'clear')
      this.setState({
        display: 0,
        placeholder: 0,
        operation: null,
        equal: false,
      });
    if (op === 'equal') {
      this.setState({
        display: arithmetic(operation, display, placeholder),
        equal: true,
      });
    } else this.setState({ operation: op});
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
          <button onClick={() => this.clickOperation('clear')}>Clear</button>
          <button onClick={() => this.clickOperation('add')}>+</button>
          <button onClick={() => this.clickOperation('subtract')}>-</button>
          <button onClick={() => this.clickOperation('multiply')}>*</button>
          <button onClick={() => this.clickOperation('divide')}>/</button>
          <button onClick={() => this.clickOperation('percent')}>%</button>
          <button onClick={() => this.clickOperation('equal')}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
