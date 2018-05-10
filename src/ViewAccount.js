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
        <div className="viewAccount">
        <div>
          <h1>Items Bought</h1>
          <div><Link className="link" to={'/itemsbought'}>See your order history</Link></div>
        </div>
        <div>
          <h1>Items Sold</h1>
          <div><Link className="link" to={'/itemssold'}>See your sales history </Link></div>
        </div>
        </div>
        <div className="viewAccount">
        <div><h1>My info</h1></div>
        <div>Name: {this.props.name}</div>
        <div>Email: {this.props.email}</div>
        </div>
        </div>
            )
          }
        }

        export default ViewAccount;