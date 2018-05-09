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
        <li>Items Bought</li>
        <li>Items Sold</li>
        </div>
        </div>
            )
          }
        }

        export default ViewAccount;