import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './App.css';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      emailInput: undefined,
      passwordInput: undefined,

      email: undefined,
      password: undefined
    }

  }

  handleEmailChange = (event) => {
    this.setState({ emailInput: event.target.value })
  }

  handlePasswordChange = (event) => {
    this.setState({ passwordInput: event.target.value })
  }


  handleLoginSubmit = (event) => {
    event.preventDefault();
    let bod = JSON.stringify(
      {
        email: this.state.emailInput,
        password: this.state.passwordInput
      }
    )

    fetch('/login', { method: 'POST', body: bod })

  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleLoginSubmit}>

          <input placeholder="Email"
            type="text"
            value={this.emailInput}
            onChange={this.handleEmailChange}>
          </input>

          <br /><br />

          <input placeholder="Password" 
            type="password"
            value={this.passwordInput}
            onChange={this.handlePasswordChange}>
          </input>
          
          <br /><br />

          <input type="submit"></input>

        </form>

      </div>
    )
  }
}

export default SignIn;