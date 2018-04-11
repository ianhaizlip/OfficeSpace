import React, { Component } from "react";
import "./form-login.css";




import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


 class PaperModel extends Component {
  render() {
    return (
  <div>
 
    <Paper style={style} zDepth={3} rectangle>
    <div style={{margin: '40% 0 0 35%', position: 'absolute'}}>
    <input
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />

        <input
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          type="password"
          floatingLabelFixed
        />
        <br />
        <button label="Submit" onClick={e => this.onSubmit(e)} primary />
        <p className="text-left">Forgot Password</p>
</div>
</Paper>
</div>
    
  
);
  }
}

export default PaperModel;