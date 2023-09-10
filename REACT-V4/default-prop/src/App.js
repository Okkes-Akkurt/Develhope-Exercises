import React from 'react';
import './App.css';

class Welcome extends React.Component {
    render() {
        const {name} = this.props;
        return <h1>Welcome, {name}!</h1>;
    }
}

Welcome.defaultProps = {
    name: 'ÖKKEŞ',
};

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Welcome />
            </div>
        );
    }
}

export default App;
