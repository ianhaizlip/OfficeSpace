import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';



import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/login-page";
import { Button } from 'reactstrap';
import SideBar from './components/sidebar/side-bar';



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
        <Router>
          <div>
            <Switch>
              <Route path='/' component={LoginPage} exact />
              <Route path='/dashboard' component={SideBar} exact />
              {/* <Route path='/inbox' component={} exact /> */}
              {/* <Route path='/clients' component={} exact /> */}
              {/* <Route path='/login' component={Form} exact /> */}
              {/* <Route path='/signup' component={SignUp} exact/> */}
              {/* <Route path='/client/:user/:bucket' component={UserProfile}/> */}
              {/* <Route component={PageNotFound}/> */}
            </Switch>
          </div>
        </Router>
          
        </div>
       
   
    );
  }
}

export default App;