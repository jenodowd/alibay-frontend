import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemsBought from './ItemsBought';
import ItemsSold from './ItemsSold';
import './App.css';


class ViewAccount extends Component {
    constructor() {
      super();

    }

    render() {
      return (
        <div className="accountDetails">
        {this.props.name && <div></div>}
        <div className="viewAccount">
        <div><h1>My account </h1>
        <div>Name: {this.props.name}</div>
        <div>Email: {this.props.email}</div>
        <div>Password ******* <button>Change password</button></div>

        </div>
        </div>
        <div className="viewAccount"><ItemsBought userID={this.props.userID} /></div>
        <div className="viewAccount"><ItemsSold userID={this.props.userID} /></div>
         </div>   )
          }
        }

        export default ViewAccount;