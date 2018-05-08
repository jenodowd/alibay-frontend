import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './App.css';

class Item extends Component {
  render() {
    return (
      <div>
          <div>{this.props.name}</div>
          <div>{this.props.description}</div>
          <div>${this.props.price}</div>
      </div>
          )
        }
      }
      
export default Item;