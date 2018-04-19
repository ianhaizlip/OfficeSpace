import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import axios from 'axios';



import logo from "./logo.svg";
import "./App.css";
import Login from './pages/Home/login-page';
import Footer from './components/footer/footer';
import SideBar from './components/sidebar/side-bar';
import CalendarCard from './components/calendar/calendar';
import UserForm from './components/form/form';
import { Container, Row, Col } from 'reactstrap';
import CompanyCards from './components/card/card';
import NotFound from './components/not-found/not-found';

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

  userDidLogin = (userData) => {
    console.log(userData)
    // axios.post("/api/login", userData).then((res) => {
    //   console.log(res)
    //   this.checkLogin(cb)
    //   return <Redirect to={`/dashboard/${this.state.user.username}`} />
    // })
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
            <Route path='/' component={UserForm} exact/>
              {/* <Route path='/' exact render={(props) => (
                <Login userInfo={this.state.user} {...props} handleLogin={this.userDidLogin} />
              )}/> */}
              {/* <Route path="/user/:username" render={(props) => {
                console.log(this.state.user.LoggedIn, "this is in path for /profiles")
                return this.state.user.loggedIn ? (
                  <Profile {...props} />
                ) : (
                    <Redirect to="/login" />
                  )
              }} /> */}
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