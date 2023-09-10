import React from 'react';
import './App.css';




class Age extends React.Component {
    render() {
        const {age} = this.props;
        return <p>Your age is {age}.</p>;
    }
}

class Welcome extends React.Component {
    render() {
        const {name, age} = this.props;
        return (
            <div>
                <p>
                    Welcome, <strong>{name}</strong>!
                </p>
                <Age age={age} />
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
