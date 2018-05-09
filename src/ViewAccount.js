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
        <h1>Items Bought</h1>
        <h1>Items Sold</h1>
        </div>
            )
          }
        }

        export default ViewAccount;