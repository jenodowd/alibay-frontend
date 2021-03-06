import React, { Component } from "react";
import "./App.css";
import Item from "./Item.js";

class ItemsSold extends Component {
  constructor() {
    super();
    this.state = {itemsSold:[]};
  }
  componentDidMount() {
    fetch("/getItemsSold?userID=" + this.props.userID, {
      method: "GET"
    })
      .then(response => response.text())
      .then(responseBody => {
        let parsed = JSON.parse(responseBody);
        if (parsed.success){
        let itemsSold = parsed.itemIDs;
        this.setSoldItems(itemsSold);
        }
      });
  }

  setSoldItems = async itemsSold => {
    console.log(itemsSold)
    let responses = await Promise.all(
      itemsSold.map(itemID => 
        fetch("getItemDetails?itemID=" + itemID, { method: "GET" }).then(res => res.json())
      )
    );
    let itemObjects = responses.map((res, i) => ({ ...res.details, itemID: itemsSold[i] }));
    this.setState({ itemsSold: itemObjects });
    console.log(this.state.itemsSold)
  };

  displayItemsSold = () => {

    if (Object.keys(this.state.itemsSold).length === 0) {
      return (<div>No previous items sold</div>) }
  
    return this.state.itemsSold.map(item => {
      return (
        <div className="items">
        <div className="items">
          <Item itemID={item.itemID}
            image={item.image}
            name={item.itemName}
            description={item.description}
            price={item.price}
          />
        </div>
        </div>
      );
    });
  };

  render() {

    return (
      <div>
        {this.props.name && <div className="viewAccount">My Account</div>}
        <h1>Items Sold</h1>
        <div className="accountItems">{this.displayItemsSold()}</div>
      </div>
    );
  }
}

export default ItemsSold;
