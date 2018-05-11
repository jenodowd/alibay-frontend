import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import "./App.css";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      emailInput: "caroline.song@email.com",
      passwordInput: "bye123",
      loggedIn: false
    };
  }

  handleEmailChange = event => {
    this.setState({ emailInput: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ passwordInput: event.target.value });
  };

  handleLoginSubmit = event => {
    event.preventDefault();
    let bod = JSON.stringify({
      email: this.state.emailInput,
      password: this.state.passwordInput
    });

    fetch("/login", { method: "POST", body: bod })
      .then(response => response.text())
      .then(responseBody => JSON.parse(responseBody))
      .then(responseBody => {
        if (responseBody.success) {
          this.setState({ loggedIn: true });
          this.props.setName(responseBody.firstName);
          this.props.setUserID(responseBody.userID);
          this.props.setEmail(responseBody.email);
          fetch("/getCart?userID=" + responseBody.userID)
            .then(res => res.json())
            .then(res => {
              this.props.setCartItems(res.itemIDs);
            });
        } else {
          this.setState({ loginFailed: true });
        }
      });
  };


  render() {
    //LOGIN IN VARIABLE

    let loginForm = (

      <form className="signUpForm" onSubmit={this.handleLoginSubmit}>
        <input
          className="inputField"
          placeholder="Email"
          type="text"
          value={this.emailInput}
          onChange={this.handleEmailChange}
        />

        <br />
        <br />

        <input
          className="inputField"
          placeholder="Password"
          type="password"
          value={this.passwordInput}
          onChange={this.handlePasswordChange}
        />

        <br />
        <br />

        <input className = "submitButton" type="submit" value="SUBMIT"/>
      </form>
    );

    //

    if (this.state.loggedIn === true) {
      return (
        <div>
        <div className="signUpBack" onClick={this.props.closeSignIn} />
        <div className="signUp">
        <button className="closeButton" onClick={this.props.closeSignIn}><img className="buttonImg" src = "./x.png" /></button>
          <div className="signUpForm">
          <p className = "congratsMessage">You're logged in!</p>
          <button className = "shopButton" onClick={this.props.closeSignIn}>START SHOPPING</button>
          </div>
        </div>
        </div>
      );
    }

    if (this.state.loginFailed === true) {
      return (
        <div>
        <div className="signUpBack" onClick={this.props.closeSignIn} />
        <div className="signUp">
        <button className="closeButton" onClick={this.props.closeSignIn}><img className="buttonImg" src = "./x.png" /></button>
          <p className = "errorMessage">Uh oh, try again!</p>
          {loginForm}
        </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="signUpBack" onClick={this.props.closeSignIn} />
          <div className="signUp">
            <button className="closeButton" onClick={this.props.closeSignIn}><img className="buttonImg" src = "./x.png" /></button>
            <h1 className = "formHeader">Login</h1>
            {loginForm}
          </div>
        </div>
      );
    }
  }
}

export default SignIn;
