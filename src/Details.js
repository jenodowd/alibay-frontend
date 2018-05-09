import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { listings } from './FakeData.js';
import './App.css';

class Details extends Component {
  render() {
    return (
      <div className="card">
      <div>
          <img src={this.props.image} alt="null" />
          <div>{this.props.name}</div>
          <div>{this.props.description}</div>
          <div>${this.props.price}</div>
      </div>
      </div>
          )
        }
      }
      
export default Details;