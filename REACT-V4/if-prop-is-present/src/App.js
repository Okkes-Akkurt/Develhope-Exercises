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

        // Check if age is defined
        if (age !== undefined) {
            return (
                <div>
                    <p>
                        Welcome, <strong>{name}</strong>!
                    </p>
                    {/* Render the Age component */}
                    <Age age={age} />
                </div>
            );
        } else {
            return (
                <div>
                    <p>
                        Welcome, <strong>{name}</strong>!
                    </p>
                    <p>Your age is not provided.</p>
                </div>
            );
        }
    }
}

Welcome.defaultProps = {
    name: <strong>ÖKKEŞ</strong>,
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
