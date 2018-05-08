import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class MainNav extends Component {
  render() {
    return (
      <div className='mainNav'>
        <ul className="mainNavUL">
          <li className="logo"><Link className="link" to={'/'}> LOGO </Link> &nbsp; </li> 
          <li className="mainNavLI"><Link className="link" to={'/'}> Category 1 </Link> &nbsp; &nbsp; </li> 
          <li className="mainNavLI"><Link className="link" to={'/'}> Category 2 </Link> &nbsp; &nbsp; </li> 
          <li className="mainNavLI"><Link className="link" to={'/'}> Category 3 </Link> &nbsp; &nbsp; </li> 
          <li className="mainNavLI"><Link className="link" to={'/'}> Category 4 </Link> &nbsp; &nbsp; </li> 
        </ul>
      </div>
          )
        }
      }
      
export default MainNav;