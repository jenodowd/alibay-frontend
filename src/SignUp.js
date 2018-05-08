import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import './App.css';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      firstNameInput: undefined,
      lastNameInput: undefined,
      emailInput: undefined,
      passwordInput: undefined,
      confirmPasswordInput: undefined,

      firstName: undefined,
      lastName: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined
    }

  }


  handleFirstNameChange = (event) => {
    this.setState({ firstNameInput: event.target.value })
  }

  handleLastNameChange = (event) => {
    this.setState({ lastNameInput: event.target.value })
  }

  handleEmailChange = (event) => {
    this.setState({ emailInput: event.target.value })
  }

  handlePasswordChange = (event) => {
    this.setState({ passwordInput: event.target.value })
  }

  handleConfirmPasswordChange = (event) => {
    this.setState({ confirmPasswordInput: event.target.value })
  }

  handleSignUpSubmit = (event) => {
    event.preventDefault();
    let bod = JSON.stringify(
      {
        email: this.state.emailInput,
        password: this.state.passwordInput,
        confirmPassword: this.state.confirmPasswordInput,
        firstName: this.state.firstNameInput,
        lastName: this.state.lastNameInput
      }
    )
    fetch('/signup', { method: 'POST', body: bod })
    .then(response => response.text())
    .then((response) => console.log(response))
  }
  

  render() {
    return (
      <div>

        <form onSubmit={this.handleSignUpSubmit}>

          <input className="inputField" placeholder="First Name"
            type="text"
            value={this.state.firstNameInput}
            onChange={this.handleFirstNameChange}>
          </input>

          <br /><br />

          <input className="inputField" placeholder="Last Name"
            type="text"
            value={this.state.lastNameInput}
            onChange={this.handleLastNameChange}>
          </input>

          <br /><br />

          <input className="inputField" placeholder="Email"
            type="text"
            value={this.state.emailInput}
            onChange={this.handleEmailChange}>
          </input>

          <br /><br />

          <input className="inputField" placeholder="Password"
            type="password"
            value={this.state.passwordInput}
            onChange={this.handlePasswordChange}>
          </input>

          <br /><br />

          <input className="inputField" placeholder="Confirm Password"
            type="password"
            value={this.state.confirmPasswordInput}
            onChange={this.handleConfirmPasswordChange}>
          </input>

          <br /><br />

          <input type="submit"></input>

        </form>

      </div>
    )
  }
}

export default SignUp;