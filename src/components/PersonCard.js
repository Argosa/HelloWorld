import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{firstName} {lastName}</h1>
                <h4>Age: {age}</h4>
                <h4>Hair Color: {hairColor}</h4>
            </div>
        );
        
    }
}

export default PersonCard