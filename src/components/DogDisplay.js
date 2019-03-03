import React from 'react';

function DogDisplay(props) {
  return (
    <div>
      <img src={ props.image } alt="Beautiful pitbulls!"/>
    </div>
  );
}

export default DogDisplay;