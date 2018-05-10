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

  addToCart = () => {
    let body = JSON.stringify({userID: this.props.userID , itemID: this.props.itemID})
    fetch('/addToCart', {
      method: 'POST',
      body: body
    }).then(res=>res.text())
    .then (resB => {
      let parsed = JSON.parse(resB);
      let itemIDs = parsed.itemIDs;
      this.setState({cartItemIDs: itemIDs})
    })
  }
  
  render() {
    //console.log(this.state.image)
    return (
      <div className="details">
          <img className="detailImg" src={"/"+this.state.image} alt="null" />
          <div className="detailTxt">
          <h2>{this.state.itemName}</h2>
          <div className="detailDesc">{this.state.description}</div>
          <h4>${this.state.price}</h4>
          <button onClick={this.addToCart}>Add to cart</button>
          </div>
      </div>
          )
        }
      }
      
export default Details;