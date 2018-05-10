import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Item from './Item.js';

class Cart extends Component {
    constructor() {
        super();
        this.state={  
          itemIDs: []
        }
    }

    componentDidMount() {
        fetch('/getCart', {
            method: 'GET'
        }).then(res=>res.text())
        .then(resB=> {
            let parsed = JSON.parse(resB);
            let itemIDs = parsed.itemIDs;
            this.getCartItemDetails(itemIDs)
        })
      }

    getCartItemDetails = async itemIDs => {
        let responses = await Promise.all(
            itemIDs.map(itemID => 
              fetch("getItemDetails?itemID=" + itemID, { method: "GET" }).then(res => res.json())
            )
          );
          let itemObjects = responses.map((res, i) => ({ ...res.details, itemID: itemIDs[i] }));
          this.setState({ itemsIDs: itemObjects });
        };
    
    renderItems = () => {
        return this.state.itemIDs.map(item =>{
          return (<div className="items">
            <Item itemID={item.itemID} image={item.image} name={item.itemName} 
            description={item.description} price={item.price} />
          </div>)})
      
      }
  render() {
    return (
      <div className="card">
        {this.props.name && <div className="viewAccount">My Account</div>}
        <div>Items in your cart</div>
        <div>{this.renderItems()}</div>
        <div><Link className="link" to={'/viewaccount'}>Return to your account</Link></div>
      </div>
          )
        }
      }
      
export default Cart;