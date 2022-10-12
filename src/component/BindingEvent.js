import React, { Component } from "react";


class BindingEvent extends Component {
    constructor() {
        super();
        // this.ChangeMessage = this.ChangeMessage.bind(this)
        this.state = {
            message: "hello"
        }
    }
    ChangeMessage=()=> {
        this.setState ({
            message: "Welcome"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.ChangeMessage}>click me</button> 
                {/* <button onClick={this.ChangeMessage.bind(this)}>click me</button> */}
                {/* <button onClick={this.ChangeMessage}>click me</button> */}
            </div>
    )
    }
}
export default BindingEvent;