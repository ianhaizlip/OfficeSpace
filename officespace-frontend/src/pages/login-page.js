import React, { Component } from "react";
import "./login-page.css";
// import img from '../components/img/brand.png';


  
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
    return (

	 // <div className = "col-sm-8"> 
  //       <div className = "row"> 

    	<div className="login-card">

<div className="brand animated fadeIn">
	<div className="img">
                        // <img src={require("../components/img/brand.png")} style={{ width:"90vw", height:"50vh", marginTop:"40px", paddingBottom:"15px", paddingTop:"10px"}}/>
    	    	</div>
    	    	 <div className="paragraph">Please login to your account</div>
    	  
    	    

    	<div className = "row"> 
        <div className="col-sm-12">
 <Form>


        <div className="form-group">
         
          <Input type="email" className="form-control" id="inputTextEmail" placeholder="Email" />
        </div>
    	<div className = "row"> 
        <div className="col-sm-12">
       <div className="form-group">
       
          <Input type="password" className="form-control" id="inputTextPassword" placeholder="Password" />
        </div>
          <button className="btn btn">Login</button>
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