import React, { Component } from 'react';
import '../App.css';

class DogButton extends Component {
  render() {
    return (
      <div>
          <button className='btn'>Get Dogs!</button>
      </div>
    );
  }
}

export default DogButton;