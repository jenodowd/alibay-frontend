import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


class ViewAccount extends Component {
    constructor() {
      super();

    }

    renderItemsBought = () =>{
      fetch('/getItemsBought', { method: 'GET'})
      .then(response =>response.text())
      .then(responseBody =>console.log(responseBody))
    }

    renderItemsSold = () =>{
      fetch('/getItemsSold?userID='+this.props.userID, { method: 'GET'})
      .then(response =>response.text())
      .then(responseBody =>console.log(responseBody))
    }

    render() {
      return (
        <div>
        {this.props.name && <div className="viewAccount">My Account</div>}
        <h1>Items Bought</h1>
        {this.renderItemsBought}
        <h1>Items Sold</h1>
        {this.renderItemsSold}
        </div>
            )
          }
        }

        export default ViewAccount;