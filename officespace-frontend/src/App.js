import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';

import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/login-page";
import { Button } from 'reactstrap';




class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
   
        <div className="App">
          <LoginPage onChange={fields => this.onChange(fields)} />
          
        </div>
        
   
    );
  }
}

export default App;