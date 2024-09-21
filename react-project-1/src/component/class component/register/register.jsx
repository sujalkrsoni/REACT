import { timers } from "jquery";
import React from "react";

export class Register extends React.PureComponent
{
    constructor(){
        super();
        this.state  = {
            title : "heello",
            styleobj : {boxShadow : '2px 2px 2px black',backgroundColor : 'red'}
        }
    }
    componentDidMount(){
        this.setState({
            title : "hello there it's sujal"
        })
    }
    render(){
        return (
            <div style={this.state.styleobj}>
                <h2>Register {this.state.title}</h2>
            </div>
        )
    }
}