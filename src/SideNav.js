import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Search from './Search.js';
import './App.css';

class SideNav extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className="sideNav">
        <Search setSearchItemIDs={this.props.setSearchItemIDs}/>
        <ul className="sideNavUL">
          <li className="sideNavTitle">Sort by:</li>
          <li className="sideNavTitle">Price</li>
          <li className="sideNavLI">Low to High</li>
          <li className="sideNavLI">High to Low</li>
          <li className="sideNavTitle">Recently Added</li>
          <li className="sideNavTitle">Deals</li>
        </ul>
      </div>
          )
        }
      }
      
export default SideNav;