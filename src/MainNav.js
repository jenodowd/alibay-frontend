import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class MainNav extends Component {
  render() {
    return (
      <div className='mainNav'>
        <ul className="mainNavUL">
          <li className="logo"><Link className="link" to={'/'}><img className="logoImage" alt="" src = "./logo.png" /></Link> &nbsp; </li> 
          <li className="mainNavLI"><Link className="link" to={'/homeandgarden'}> Home &amp; Garden </Link> &nbsp; &nbsp; </li> 
          <li className="mainNavLI"><Link className="link" to={'/fashion'}> Fashion </Link> &nbsp; &nbsp; </li> 
          <li className="mainNavLI"><Link className="link" to={'/accessories'}> Accessories </Link></li> 
        </ul>
      </div>
          )
        }
      }
      
export default MainNav;