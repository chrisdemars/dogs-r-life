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

  getDogs(image) {
    this.setState({ image });
  }

  render() {
    const { image } = this.setState;
    return (
      <div>
        <header className="header">
          <h1>Dogs R Life</h1>
          <p>Having a bad day? Here is a dog that can cheer you up!</p>
        </header>
        <DogDisplay 
          image={ this.state.image }
        />
        <DogButton
          getDogImages={ this.getDogs.bind(this) }
        />
      </div>
    );
  }
}

export default App;