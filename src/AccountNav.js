import React, { Component } from 'react';
import MainNav from './MainNav.js'
import { Link } from 'react-router-dom';
import './App.css';

class AccountNav extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className = "nav">
      <MainNav />
      <div className = "space"></div>
      <div className="accountNav">
        <ul className="accountNavUL">
          {this.props.name && <li className="accountNavLI">Welcome {this.props.name} &nbsp; </li>}
          {this.props.name && <li className="accountNavLI"><Link className="link" to={'/viewaccount'}>View account</Link> &nbsp; </li>}
          {!this.props.name && <li className="accountNavLI"><button className="link" onClick={this.props.renderSignIn}>Login</button> &nbsp; </li>}
          {!this.props.name && <li className="accountNavLI"><button className="link" onClick={this.props.renderSignUp}>Sign Up</button> &nbsp; </li>}
          {this.props.name && <li className="accountNavLI"><button className="postItem" onClick={this.props.renderCreateListing}>POST ITEM</button> &nbsp; </li>}
    {this.props.name && <li className="accountNavLI"><button><Link className="link" to={'/cart/'+ this.props.userID}>Shopping Cart ({this.props.counter})</Link></button></li>}
        </ul>
      </div>
      </div>
          )
        }
      }
      
export default AccountNav;