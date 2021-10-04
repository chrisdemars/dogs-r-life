import React from 'react';

const DogDisplay = (props) => {
    return (
        <>
            <img src={props.image} alt='Beautiful pitbulls!' />
        </>
    );
};

export default DogDisplay;
