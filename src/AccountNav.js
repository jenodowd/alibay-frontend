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
          {this.props.name && <li className="accountNavLI"><Link className="link" to={'/viewaccount'}>VIEW ACCOUNT({this.props.name})</Link> &nbsp; </li>}
          {!this.props.name && <li className="accountNavLI"><button className="link" onClick={this.props.renderSignIn}>LOGIN</button> &nbsp; </li>}
          {!this.props.name && <li className="accountNavLI"><button className="link" onClick={this.props.renderSignUp}>SIGN UP</button> &nbsp; </li>}
          {this.props.name && <li className="accountNavLI"><button className="postItem" onClick={this.props.renderCreateListing}>POST ITEM</button> &nbsp; </li>}
          {this.props.name && <li className="accountNavLI"><button className="cartButton"><Link className="link" to={'/cart/'+ this.props.userID}><img className="cartImg" src='../cart.png'></img>({this.props.counter})</Link></button></li>}
        </ul>
      </div>
      </div>
          )
        }
      }
      
export default AccountNav;