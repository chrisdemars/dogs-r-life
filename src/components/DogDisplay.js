import React, { Component } from 'react';
import '../App.css';
class DogDisplay extends Component {
  render() {    
    return (
      <div>
        <img src={ this.image } alt="Beautiful pitbulls!"/>
      </div>
    );
  }
}

export default DogDisplay;