import React, { Component } from 'react';
import DogButton from './components/DogButton';
import DogDisplay from './components/DogDisplay';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    }
  }

  componentDidMount = () => {
    axios.get('https://dog.ceo/api/breed/terrier-american/images/random')
    .then(response => {
      this.setState({ image: response.data.message });
    })
    .catch(error => {
      console.log(error);
    })
  }

  getDogs = event => {
    this.setState({ image: event.target })
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1>Dogs R Life</h1>
          <p>Having a bad day? Here is a dog that can cheer you up!</p>
        </header>
        <DogDisplay/>
        <DogButton/>
      </div>
    );
  }
}

export default App;