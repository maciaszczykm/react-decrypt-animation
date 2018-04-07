import React, { Component } from 'react';
import Decrypt from 'react-decrypt-animation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Decrypt text="maciaszczyk" delay="10000"/>
      </div>
    );
  }
}

export default App;
