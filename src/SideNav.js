import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <li className="sideNavLI"><Link className ="link" to={'/lowtohigh'}>Low to High</Link></li>
          <li className="sideNavLI"><Link className ="link" to={'/hightolow'}>High to Low</Link></li>
          <li className="sideNavTitle">Deals</li>
          <li className="sideNavLI"><Link className ="link" to={'/deals'}>$25 and under</Link></li>
          <li className="sideNavTitle"><Link className="link" to={'/popular'}>Most Popular</Link></li>
        </ul>
      </div>
          )
        }
      }
      
export default SideNav;