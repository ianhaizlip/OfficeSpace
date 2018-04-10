import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/login-page";

injectTapEventPlugin();

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
      <MuiThemeProvider>
        <div className="App">
          <LoginPage onChange={fields => this.onChange(fields)} />
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;