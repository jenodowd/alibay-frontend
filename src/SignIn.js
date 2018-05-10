import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import "./App.css";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      emailInput: "caroline.song@email.com",
      passwordInput: "bye123",
      loggedIn: false,
      loginFailed: false
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
      //.then(responseBody => console.log(responseBody))
      //.then(responseBody => console.log(responseBody.firstName))
      .then(responseBody => {
        if (responseBody.success) {
          //console.log("login successful")
          this.setState({ loggedIn: true });
          this.props.setName(responseBody.firstName);
          this.props.setUserID(responseBody.userID);
          this.props.setEmail(responseBody.email);
        } else {
          this.setState({ loginFailed: true });
        }
      });
  };

  handleLoginFail = () => {
    //this.props.closeSignIn
    //this.props.renderSignIn
  };

  render() {
    //LOGIN IN A VARIABLE
    let loginForm = (
      <div>
      <div className="signUpBack" onClick={this.props.closeSignIn}>
      </div>
      <div className="signUp">
        <button onClick={this.props.closeSignIn}>close</button>
        <form className="signUpForm" onSubmit={this.handleLoginSubmit}>
          <h1>Login</h1>

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

          <input type="submit" />
        </form>
      </div>
      </div>
    );
    //

    if (this.state.loggedIn === true) {
      return (
        <div className="signUp">
          <button onClick={this.props.closeSignIn}>close</button>
          <div className="signUpForm">You're logged in!</div>
        </div>
      );
    }

    if (this.state.loginFailed === true) {
      return (
        <div className="signUp">
          <button onClick={this.props.closeSignIn}>close</button>
          Something went wrong!
          {/* {loginForm} */}
          {/* <button onClick={this.props.handleLoginFail}>Try Again?</button> */}
        </div>
      );
    } else {
      return loginForm;

      // <div className = "signUp">
      // <button onClick={this.props.closeSignIn}>close</button>
      //   <form className ="signUpForm" onSubmit={this.handleLoginSubmit}>

      //     <h1>Login</h1>

      //     <input
      //       className="inputField"
      //       placeholder="Email"
      //       type="text"
      //       value={this.emailInput}
      //       onChange={this.handleEmailChange}
      //     />

      //     <br />
      //     <br />

      //     <input
      //       className="inputField"
      //       placeholder="Password"
      //       type="password"
      //       value={this.passwordInput}
      //       onChange={this.handlePasswordChange}
      //     />

      //     <br />
      //     <br />

      //     <input type="submit" />
      //   </form>
      // </div>
    }
  }
}

export default SignIn;
