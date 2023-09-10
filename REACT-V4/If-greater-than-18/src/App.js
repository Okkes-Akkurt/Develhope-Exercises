import React from 'react';

class Age extends React.Component {
    render() {
        const {age} = this.props;
        return <p>Your age is {age}.</p>;
    }
}

class Welcome extends React.Component {
    render() {
        const {name, age} = this.props;

        if (age > 18) {
            return (
                <div>
                    <p>
                        Welcome, <strong>{name}</strong>!
                    </p>
                    <Age age={age} />
                </div>
            );
        } else {
            return (
                <div>
                    <p>
                        Welcome, <strong>{name}</strong>!
                    </p>
                    <p>You are too young to view your age.</p>
                </div>
            );
        }
    }
}

Welcome.defaultProps = {
    name: <strong>ÖKKEŞ</strong>,
    age: 18,
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
