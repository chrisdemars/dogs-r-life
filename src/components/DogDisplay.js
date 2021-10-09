import React from 'react';

const DogDisplay = (props) => {
    return (
        <>
            <img src={props.image} alt='Beautiful dogs!' />
        </>
    );
};

export default DogDisplay;
