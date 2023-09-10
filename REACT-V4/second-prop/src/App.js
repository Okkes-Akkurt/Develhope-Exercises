import React from 'react';
import './App.css';


class Welcome extends React.Component {
    render() {
        const {name, age} = this.props;
        return (
            <div className='App'>
                <h1>Welcome, {name}!</h1>
                <h2>Your age is {age}.</h2>
            </div>
        );
    }
}

Welcome.defaultProps = {
    name: 'ÖKKEŞ',
    age: '28',
};

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome
                    name='DevelHope'
                    age={30}
                />
            </div>
        );
    }
}

export default App;
