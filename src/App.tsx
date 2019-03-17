import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button'
import Button1 from './components/Button1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button text="button with function type" border='success' />
          <Button1 text="button with class type" border='success' />
        </header>
      </div>
    );
  }
}

export default App;
