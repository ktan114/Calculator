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
    return <div className="App">Calculator</div>;
  }
}

export default App;
