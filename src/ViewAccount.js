import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


class ViewAccount extends Component {
    constructor() {
      super();

    }

    render() {
      return (
        <div>
        {this.props.name && <div className="viewAccount">My Account</div>}
        <div className="accountCategories">
        <li><Link className="link" to={'/itemsbought'}>Items Bought</Link></li>
        <li><Link className="link" to={'/itemssold'}>Items Sold</Link></li>
        </div>
        </div>
            )
          }
        }

        export default ViewAccount;