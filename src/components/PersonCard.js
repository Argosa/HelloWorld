import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            addCount: 0
        }
    }

    handleclick = () => {
        this.setState({
            addCount: this.state.addCount + 1
        })
    }

    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        const Button = (props) => {
            return (
            <button onClick={props.handleclick}>Birthday Button for {firstName} {lastName}</button>
            );
        }
        let newAge = parseInt(age) + this.state.addCount
        return (
            <div>
                <h1>{firstName} {lastName}</h1>
                <h4>Age: {newAge}</h4>
                <h4>Hair Color: {hairColor}</h4>
                <Button handleclick={this.handleclick} count={this.state.addCount}/>
            </div>
        );
        
    }
}

export default PersonCard