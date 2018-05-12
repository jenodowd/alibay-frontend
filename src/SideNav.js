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
          <li className="sideNavTitle">SORT BY:</li>
          <li className="sideNavTitle">PRICE</li>
          <li className="sideNavLI"><Link className ="link" to={'/lowtohigh'}>Low to High</Link></li>
          <li className="sideNavLI"><Link className ="link" to={'/hightolow'}>High to Low</Link></li>
          <li className="sideNavTitle">DEALS</li>
          <li className="sideNavLI"><Link className ="link" to={'/deals'}>$25 and under</Link></li>
          <li className="sideNavTitle"><Link className="link" to={'/popular'}>MOST POPULAR</Link></li>
        </ul>
      </div>
          )
        }
      }
      
export default SideNav;