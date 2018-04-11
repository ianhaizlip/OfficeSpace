import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import "./App.css";
import LoginPage from "./pages/login-page";
import axios from 'axios';


injectTapEventPlugin();

class App extends Component {
    state = {
        user: {
            id: null,
            name: "",
            username: "",
            email: "",
            profilePic: null,
            loggedIn: false,
            isAdmin: false
        },
        fields: {}
    };

    componentDidMount() {
        this.checkLogin()
        console.log(this.state)
    }

    checkLogin = (cb) => {
        axios.get("/api/session").then((res) => {
            console.log(this.state, "this is checkloging state")
            console.log(res)
            this.setState({ user: res.data});
            console.log(this.state)
            if(cb) {
                cb()
            }
        })
    }

    userDidLogin = (userData, cb) => {
        console.log(userData)
        axios.post("/api/login", userData).then((res) => {
            console.log(res)
            this.checkLogin(cb)
////////////// need to update path
            return <Redirect to={`/user/${this.state.user.username}`} />
        })
    }

    userLogOut = (cb) => {
        axios.get("/api/logout").then((res) => {
            console.log(res)
            this.setState({ user: res.data });
            <Redirect to="/"/>
        })
    }

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
        <Router>
      <MuiThemeProvider>
        <div className="App">
          <LoginPage onChange={fields => this.onChange(fields)} />
          
        </div>
      </MuiThemeProvider>
        </Router>
    );
  }
}

export default App;