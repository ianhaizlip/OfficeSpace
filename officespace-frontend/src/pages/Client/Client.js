import React, { Component } from "react";


export default class Client extends Component {
    constructor(props) {
        super(props);

    };
    render(){

        return(
            <div className='client'>
                <h1>This is the Client page</h1>
                <h2>username: {this.props.userInfo.username}</h2>
            </div>
        );
    }
};