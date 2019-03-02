import React, { Component } from 'react';
import '../App.css';

class DogDisplay extends Component {
  render() {
    return (
      <div>
        <img src={ image } alt="Beautiful pitbulls!"/>
      </div>
    );
  }
}

export default DogDisplay;