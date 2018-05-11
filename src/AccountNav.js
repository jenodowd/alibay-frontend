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
          {this.props.name && <li className="accountNavName"><Link className="link" to={'/viewaccount'}>{this.props.name}'s account</Link> &nbsp; </li>}
          {!this.props.name && <li className="accountNavLI"><button className="link" onClick={this.props.renderSignIn}>LOGIN</button> &nbsp; </li>}
          {!this.props.name && <li className="accountNavLI"><button className="link" onClick={this.props.renderSignUp}>SIGN UP</button> &nbsp; </li>}
          {this.props.name && <li className="accountNavLI"><button className="postItem" onClick={this.props.renderCreateListing}>POST ITEM</button> &nbsp; </li>}
          {this.props.name && <li className="accountNavLI"><button className="cartButton"><Link className="link" to={'/cart/'+ this.props.userID}><img className="cartImg" src='../cart.png'></img><div className="cartCounter">({this.props.counter})</div></Link></button></li>}
        </ul>
      </div>
      </div>
          )
        }
      }
      
export default AccountNav;