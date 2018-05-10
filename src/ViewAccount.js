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
        {this.props.name && <div></div>}
        <div className="viewAccount">
        <div><h1>My account </h1>
        <div>Name: {this.props.name}</div>
        <div>Email: {this.props.email}</div>
        <div>Password ******* <button>Change password</button></div>
        <div><Link className="link" to={'/itemsbought'}>View order history</Link></div>
        <div><Link className="link" to={'/itemssold'}>View sales history </Link></div>
        </div>
        </div>
         </div>   )
          }
        }

        export default ViewAccount;