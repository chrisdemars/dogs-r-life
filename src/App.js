import React, { Component } from 'react';
import DogButton from './components/DogButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>Dogs R Life</h1>
          <p>Having a bad day? Here is a dog that can cheer you up!</p>
        </header>
        <DogButton/>
      </div>
    );
  }
}

export default App;
