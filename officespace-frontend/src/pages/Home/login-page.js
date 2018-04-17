import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import "./login-page.css";


  
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

    	<div className="login-card">

<div className="brand animated fadeIn">
    	    	<img src="./img/Untitled-2.png" alt="logo" id="logo" />
    	    	 <div className="paragraph">Please login to your account</div>
    	  
    	    

    	<div className = "row"> 
        <div className="col-sm-12">
 <Form>


        <div className="form-group">
         
                  <Input type="email" className="form-control" id="inputTextEmail" placeholder="Email" onChange={this.handleChange}/>
        </div>
    	<div className = "row"> 
        <div className="col-sm-12">
       <div className="form-group">
       
                      <Input type="password" className="form-control" id="inputTextPassword" placeholder="Password" onChange={this.handleChange} />
        </div>
                    <Link to={`/dashboard`}><button className="btn btn" onClick={() => {
                      this.props.handleLogin(this.state, () => {
                        this.setState({ redirect: true });
                      })
                    }}>Login</button></Link>
          <p>Forgot Password</p>
          	</div>
     	</div>
        </Form>
   </div>
        </div>
     	</div>
     	</div>
// </div>
// </div>


  )

}
}