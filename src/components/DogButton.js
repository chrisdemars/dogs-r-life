import React, { Component } from 'react';
import '../App.css';

class DogButton extends Component {

onChangeImage() {
    this.props.getDogImages(this.state.image);
}

  render() {
    return (
      <div>
          <button className='btn' onClick={ this.onChangeImage.bind(this) }>Get Dogs!</button>
      </div>
    )
  }
}

export default DogButton;