import React from 'react';
import './App.css';



class Welcome extends React.Component {
    render() {
        const {name, age} = this.props;
        return (
            <div className='App'>
                <p>
                    Welcome, <strong>{name}</strong>!
                </p>
                <p>Your age is {age}.</p>
            </div>
        );
    }
}

Welcome.defaultProps = {
    name: <strong>ÖKKEŞ</strong>,
    age: '28',
};

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome age={30} />
            </div>
        );
    }
}

export default App;
