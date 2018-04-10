import React, { Component } from "react";
import "./login-page.css";
import TextField from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';



  

export default class LoginPage extends Component {
  state = {
    
    email: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
     
      email: "",
      password: ""
    });
    this.props.onChange({
    
      email: "",
      password: ""
    });
  };

  render() {
    return (

      
    
         <CardMedia>
           <img src="./img/nature.jpg" alt="background" id="loginBackground" />
     
<Card className="card-main">
    
    
<p>Please login to your account</p>
   <br />
        
        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />

        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          type="password"
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
        <p className="text-left">Forgot Password</p>
</Card>

</CardMedia>

     
     
    );
  }
}