import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class SideNav extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className="sideNav">
        <ul className="sideNavUL">
          <li className="sideNavLI">Sort by:</li>
        </ul>
      </div>
          )
        }
      }
      
export default SideNav;