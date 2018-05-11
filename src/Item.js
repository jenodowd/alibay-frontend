import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Item extends Component {
  render() {
    return (
      <div className="card">
      <div>
        <Link to={"/details/" + this.props.itemID}> 
          <img className="images" src={'/' + this.props.image} alt="null" linkto/>
        </Link>
          <div>{this.props.name}</div>
          <div>${this.props.price}</div>
        {this.props.removeBtn?  
        <button
          name={this.props.itemID}
          className="removeButton"
          onClick={this.props.removeCart}
        >
          Remove from cart
        </button> : null}
      </div>
      </div>
          )
        }
      }
      
export default Item;