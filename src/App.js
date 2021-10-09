import React, { Component } from 'react';
import DogButton from './components/DogButton';
import DogDisplay from './components/DogDisplay';

import './App.css';

import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
        };
    }

    componentDidMount = () => {
        this.getDogs();
    };

    getDogs() {
        axios
            .get('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                this.setState({ image: response.data.message });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { image } = this.state;
        return (
            <div>
                <header className='header'>
                    <h1>Dogs R Life</h1>
                    <p>
                        Having a bad day? Here is a dog that can cheer you up!
                    </p>
                </header>
                <DogDisplay image={image} />
                <DogButton onClick={this.getDogs.bind(this)} />
            </div>
        );
    }
}

export default App;
