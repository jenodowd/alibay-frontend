import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { listings } from './FakeData.js';
import './App.css';

class Details extends Component {
  constructor(){
    super()
    this.state = {
      image: '',
      description: '',
      price: '',
      itemName: ''
    }
  }

  componentDidMount(){
    fetch("/getItemDetails?itemID="+this.props.itemID)
    .then((res)=>res.text())
    .then((resB)=> {
      let body = JSON.parse(resB).details;
      let image = body.image;
      let description = body.description;
      let itemName = body.itemName;
      let price = body.price;
      this.setState({image: image, description: description, price: price, itemName: itemName})
    })
  }
  
  render() {
    //console.log(this.state.image)
    return (
      <div className="details">
          <img className="detailImg" src={"/"+this.state.image} alt="null" />
          <div className="detailTxt">
          <div>{this.state.itemName}</div>
          <div>{this.state.description}</div>
          <div>${this.state.price}</div>
          <button onClick={this.addToCart}>Add to cart</button>
          </div>
      </div>
          )
        }
      }
      
export default Details;