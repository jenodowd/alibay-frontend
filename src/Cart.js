import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Cart extends Component {
  render() {
    return (
      <div className="card">
      <div>
        <Link to={"/details/" + this.props.itemID}> 
          <img src={this.props.image} alt="null" linkto/>
        </Link>
          <div>{this.props.name}</div>
          <div>${this.props.price}</div>
      </div>
      </div>
          )
        }
      }
      
export default Cart;