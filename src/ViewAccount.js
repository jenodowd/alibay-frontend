import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemsBought from './ItemsBought';
import ItemsSold from './ItemsSold';
import UserItems from './UserItems';
import './App.css';


class ViewAccount extends Component {
    constructor() {
      super();

    }

    render() {
      if(this.props.userID === ""){
        window.location.replace("/");
      }
      return (
        <div className="viewAccount">
        {this.props.name && <div></div>}
        <div><h1>My account </h1>
        <div>Name: {this.props.name}</div>
        <div>Email: {this.props.email}</div>
        <div>Password: *********  </div>
        <div> <button className="removeButton">Change password</button></div>
        </div>
        <div>
        <div ><UserItems userID={this.props.userID}/></div>
        <div><ItemsBought userID={this.props.userID} /></div>
        <div><ItemsSold userID={this.props.userID} /></div>
         </div>
         </div> )
          }
        }

        export default ViewAccount;