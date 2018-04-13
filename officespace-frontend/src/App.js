import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import axios from 'axios';



import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/login-page";
import { Button } from 'reactstrap';
import SideBar from './components/sidebar/side-bar';



class App extends Component {
  state = {
    user: {
      id: null,
      name: '',
      username: '',
      email: '',
      profilePic: null,
      loggedIn: false,
      isAdmin: false
    }
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  componentDidMount() {
    this.checkLogin()
    console.log(this.state)
  }

  checkLogin = (cb) => {
    axios.get("/api/session").then((res) => {
      console.log(this.state, "this is checkloging state")
      console.log(res)
      this.setState({ user: res.data });
      console.log(this.state)
      if (cb) {
        cb()
      }
    })
  }

  userDidLogin = (userData, cb) => {
    console.log(userData)
    axios.post("/api/login", userData).then((res) => {
      console.log(res)
      this.checkLogin(cb)
      return <Redirect to={`/user/${this.state.user.username}`} />
    })
  }
  userDidSignup = (userData, cb) => {
    console.log(userData)
    axios.post("/api/signUp", userData).then((res) => {
      console.log(res)
      this.checkLogin(cb)
      return <Redirect to="/user/" />
    })
  }

  userLogOut = (cb) => {
    axios.get("/api/logout").then((res) => {
      console.log(res)
      this.setState({ user: res.data });
      <Redirect to="/" />
    })
  }


  render() {
    return (
   
        <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path='/' component={LoginPage} exact />
              <Route path="/user/:username" render={(props) => {
                console.log(this.state.user.LoggedIn, "this is in path for /profiles")
                return this.state.user.loggedIn ? (
                  <Profile {...props} />
                ) : (
                    <Redirect to="/login" />
                  )
              }} />
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