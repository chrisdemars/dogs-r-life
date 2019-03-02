import React, { Component } from 'react';
import DogButton from './components/DogButton';
import './App.css';
import axios from 'axios';

class App extends Component {

  componentDidMount = () => {
    axios.get('https://dog.ceo/api/breed/terrier-american/images/random')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

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
