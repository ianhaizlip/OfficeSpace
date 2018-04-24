import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import "./login-page.css";
import classNames from 'classnames'
import _ from 'lodash'
import {isEmail} from '../../helpers/email'
import {createUser, login} from '../../helpers/user'

import {Container, Row, Col, Card, CardTitle, CardBody} from 'reactstrap';

  
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
  


export default class Login extends Component {
     constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
        redirect: false
    };
  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }



  



  
  render() {
    if (this.state.redirect && this.props.userInfo.isAdmin) {
      return <Redirect to={`/admin/${this.props.userInfo.username}`} />;
    }
    else if (this.state.redirect && !this.props.userInfo.isAdmin){
        return <Redirect to={`/client/${this.props.userInfo.username}`} />;
    }

    return (
<div className="body">

     

     
     
    	<div className="login-card">




<div className="brand animated fadeIn">

 
        
   <img src= "https://i.pinimg.com/originals/e3/bd/80/e3bd8040d980928d459eb79705afbce6.gif" style={{height:"30%", width: "40%", marginLeft:"120px"}}/>

 
  
 <Form>


        <div className="form-group"style={{marginLeft:"15px", marginTop:"-30px"}}>
         
                  <Input type="email" className="form-control" id="inputTextEmail" placeholder="Email" onChange={this.handleChange} style={{width:"40%"}}/>
        </div>
   
    
       <div className="form-group" style={{marginLeft:"15px"}}>
       
                      <Input type="password" className="form-control" id="inputTextPassword" placeholder="Password" onChange={this.handleChange} style={{width:"40%", marginTop:"-100px"}}/>
       
                    <Link to={`/dashboard`}><button className="btn btn" style={{marginTop:"-80px", width:"40%", marginLeft:"2px", backgroundColor:"#53C6BA"}} onClick={() => {
                      this.props.handleLogin(this.state, () => {
                        this.setState({ redirect: true });
                      })
                    }}>Sign in</button></Link>
          <p style={{marginTop:"-10px", marginLeft:"10px"}}>Forgot Password?</p>
        
   </div>
        
        </Form>

   </div>

        </div>


     	</div>


  )

}
}