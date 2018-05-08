import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class AccountNav extends Component {
  render() {
    return (
      <div className="accountNav">
        <ul className="accountNavUL">
          <li className="accountNavLI"><Link className="link" to={'/signin'}>Login</Link> &nbsp; </li>
          <li className="accountNavLI"><Link className="link" to={'/signup'}>Sign Up</Link> </li>
        </ul>
      </div>
          )
        }
      }
      
export default AccountNav;