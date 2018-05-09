import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class AccountNav extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className="accountNav">
        <ul className="accountNavUL">
          {this.props.name && <li className="accountNavLI">Welcome {this.props.name} &nbsp; </li>}
          {this.props.name && <li className="accountNavLI"><Link className="link" to={'/viewAccount'}>View account</Link> &nbsp; </li>}
          {!this.props.name && <li className="accountNavLI"><button className="link" onClick={this.props.F_GoLogin}>Login</button> &nbsp; </li>}
          {!this.props.name && <li className="accountNavLI"><Link className="link" to={'/signup'}>Sign Up</Link> &nbsp; </li>}
          <li className="accountNavLI"><button><Link className="link" to={'/createlisting'}>Post Item</Link></button> &nbsp; </li>
          <li className="accountNavLI">Shopping Cart</li>
        </ul>
      </div>
          )
        }
      }
      
export default AccountNav;