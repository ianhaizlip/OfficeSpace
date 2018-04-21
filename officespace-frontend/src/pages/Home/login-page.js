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

	 // <div className = "col-sm-8"> 
  //       <div className = "row"> 
      <Row>
      <Col md={6} lg={6} sm={6}/>
    	<div className="login-card">

<div className="brand animated fadeIn">
  <div className="img">
    	    	<img src='../img/brand.png' alt="logo" />
            </div>
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