import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Item from './Item.js';

class Cart extends Component {
    constructor() {
        super();
        this.state={
          listings: {},  
          itemIDs: []
        }
    }

    componentDidMount() {
        fetch('/allListings', {
          method: 'GET'
        }).then(res => res.text())
          .then(resB => {
            let parsed = JSON.parse(resB)
            let listings = parsed.listings;
            this.setState({listings: listings})
          })

        fetch('/getCart', {
            method: 'GET'
        }).then(res=>res.text())
        .then(resB=> {
            let parsed = JSON.parse(resB);
            let itemIDs = parsed.itemIDs;
            this.setState({itemIDs: itemIDs})
        })
      }

    renderListings = () => {
        return Object.keys(this.state.listings).map(itemID =>{
          return (<div className="items">
            <Item itemID={itemID} image={this.state.listings[itemID].image} name={this.state.listings[itemID].itemName} 
            description={this.state.listings[itemID].description} price ={this.state.listings[itemID].price} />
          </div>)})
      
      }
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