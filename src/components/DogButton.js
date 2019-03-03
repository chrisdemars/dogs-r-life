import React from 'react';

function DogButton(props) {
  return (
    <div>
        <button className='btn' onClick={ props.onClick }>Get Dogs!</button>
    </div>
  )
}

export default DogButton;