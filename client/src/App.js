import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  render() {
    const { total } = this.state;
    return (
      <div className="App">
        Calculator
        <div>{total}</div>
        <div>  
          <button>0</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
        <div>
          <button>Clear</button>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
          <button>%</button>
          <button>=</button>
        </div>
      </div>
    );
  }
}

export default App;
