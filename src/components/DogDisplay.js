import React, { Component } from 'react';
import '../App.css';
class DogDisplay extends Component {
  render() {
    const { image } = this.state;
    return (
      <div>
        <img src={ this.image } alt="Beautiful pitbulls!"/>
      </div>
    );
  }
}

export default DogDisplay;