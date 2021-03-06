import React, { Component } from "react";
//import { Link } from 'react-router-dom';
//import './App.css';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      firstNameInput: "",
      lastNameInput: "",
      emailInput: "",
      passwordInput: "",
      confirmPasswordInput: "",
      signUpComplete: false,
      error: false
    };
  }

  handleFirstNameChange = event => {
    this.setState({ firstNameInput: event.target.value });
  };

  handleLastNameChange = event => {
    this.setState({ lastNameInput: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ emailInput: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ passwordInput: event.target.value });
  };

  handleConfirmPasswordChange = event => {
    this.setState({ confirmPasswordInput: event.target.value });
  };

  handleSignUpSubmit = event => {
    event.preventDefault();
    let bod = JSON.stringify({
      email: this.state.emailInput,
      password: this.state.passwordInput,
      confirmPassword: this.state.confirmPasswordInput,
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput
    });
    fetch("/signup", { method: "POST", body: bod })
      .then(response => response.text())
      //.then((response) => console.log(response))
      .then(responseBody => {
        console.log(responseBody);
        return JSON.parse(responseBody);
      })
      //.then(response => console.log(response.success))
      .then(responseBody => {
        if (responseBody.success === true) {
          this.setState({ signUpComplete: true });
        } else {
          this.setState({ error: true });
        }
      });
  };

  render() {
    if (this.state.signUpComplete === true) {
      return (
        <div>
        <div className="signUpBack" onClick={this.props.closeSignUp} />
        <div className="signUp">
          <button className="closeButton" onClick={this.props.closeSignUp}><img className="buttonImg" alt="" src = "/x.png" /></button>
          <div className="signUpForm">
            <p className = "congratsMessage"> Thanks for signing up! </p>
            <button className = "shopButton" onClick={this.props.closeSignUp}>START SHOPPING</button>
          </div>
        </div>
        </div>
      );
    }

    if (this.state.error === true) {
      return (
        <div>
        <div className="signUpBack" onClick={this.props.closeSignUp} />
        <div className="signUp">
          <button className="closeButton" onClick={this.props.closeSignUp}><img className="buttonImg" alt=""  src = "/x.png" /></button>
          <div className="signUpForm">
            <p className = "congratsMessage"> This account already exists! </p>
            <button className = "submitButton" onClick={this.props.closeSignUp}>CLOSE</button>
          </div>
        </div>
        </div>
      );
    } else
      return (
        <div>
        <div className="signUpBack" onClick={this.props.closeSignUp} />
        <div className="signUp">
          <button className="closeButton" onClick={this.props.closeSignUp}><img className="buttonImg" alt=""  src = "/x.png" /></button>

          <form className="signUpForm" onSubmit={this.handleSignUpSubmit}>
            <h1 className = "signUpHeader">Sign Up</h1>

            <input
              className="inputField"
              placeholder="First Name"
              type="text"
              value={this.state.firstNameInput}
              onChange={this.handleFirstNameChange}
            />

            <br />
            <br />

            <input
              className="inputField"
              placeholder="Last Name"
              type="text"
              value={this.state.lastNameInput}
              onChange={this.handleLastNameChange}
            />

            <br />
            <br />

            <input
              className="inputField"
              placeholder="Email"
              type="text"
              value={this.state.emailInput}
              onChange={this.handleEmailChange}
            />

            <br />
            <br />

            <input
              className="inputField"
              placeholder="Password"
              type="password"
              value={this.state.passwordInput}
              onChange={this.handlePasswordChange}
            />

            <br />
            <br />

            <input
              className="inputField"
              placeholder="Confirm Password"
              type="password"
              value={this.state.confirmPasswordInput}
              onChange={this.handleConfirmPasswordChange}
            />

            <br />
            <br />

            <input className = "submitButton" type="submit" value="SUBMIT"/>
          </form>
        </div>
        </div>
      );
  }
}

export default SignUp;
