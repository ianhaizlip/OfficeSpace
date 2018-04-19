import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import "./login-page.css";
import classNames from 'classnames'
import _ from 'lodash'
import {isEmail} from '../../helpers/email'
import {createUser, login} from '../../helpers/user'

import {Container, Row, Col, Card, CardTitle, CardBody} from 'reactstrap';

  
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


  


export default class LoginPage extends Component {
     constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  



  
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/dashboard/${this.props.userInfo.username}`} />;
    }

    return (

	 // <div className = "col-sm-8"> 
  //       <div className = "row"> 
      <Row gutter={16}>
      <Col md={4} lg={4} sm={4}/>
    	<div className="login-card">

<div className="brand animated fadeIn">
    	    	<img src="./img/Untitled-2.png" alt="logo" id="logo" />
    	    	 <div className="paragraph">Please login to your account</div>
    	  
    	    

  
  
 <Form>


        <div className="form-group"style={{marginLeft:"15px", marginTop:"-30px"}}>
         
                  <Input type="email" className="form-control" id="inputTextEmail" placeholder="Email" onChange={this.handleChange} style={{width:"40%"}}/>
        </div>
   
    
       <div className="form-group" style={{marginLeft:"15px"}}>
       
                      <Input type="password" className="form-control" id="inputTextPassword" placeholder="Password" onChange={this.handleChange} style={{width:"40%", marginTop:"-100px"}}/>
       
                    <Link to={`/dashboard`}><button className="btn btn" style={{marginTop:"-80px", width:"40%", marginLeft:"2px"}} onClick={() => {
                      this.props.handleLogin(this.state, () => {
                        this.setState({ redirect: true });
                      })
                    }}>Login</button></Link>
          <p style={{marginTop:"-10px", marginLeft:"10px"}}>Forgot Password</p>
        
   </div>
        
        </Form>

   </div>

        </div>
              </Row>

     	
// </div>
// </div>


  )

}
}