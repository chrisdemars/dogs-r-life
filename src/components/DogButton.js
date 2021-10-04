import React from 'react';

const DogButton = (props) => {
    return (
        <>
            <button className='btn' onClick={props.onClick}>
                Get Dogs!
            </button>
        </>
    );
};

export default DogButton;
