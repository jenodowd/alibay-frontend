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
<<<<<<< HEAD
        <div>Password *********  </div>
        <div> <button className="password">CHANGE ACCOUNT INFO</button></div>
=======
        <div>Password: *********  </div>
        <div> <button className="removeButton">Change password</button></div>
>>>>>>> be8dd6455dc023434720205b2654546c71ae6a4f
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