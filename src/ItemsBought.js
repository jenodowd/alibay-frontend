import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Item from "./Item.js";

class ItemsBought extends Component {
  constructor() {
    super();

    this.state = {itemsBought:[]};
  }
  componentDidMount() {
    fetch("/getItemsBought?userID=" + this.props.userID, {
      method: "GET"
    })
      .then(response => response.text())
      .then(responseBody => {
        let parsed = JSON.parse(responseBody);
        if (responseBody.success){
        let itemsBought = parsed.itemIDs;
        this.setBoughtItems(itemsBought);
        }
      
      });
  }

  setBoughtItems = async itemsBought => {
    let responses = await Promise.all(
      itemsBought.map(itemID => 
        fetch("getItemDetails?itemID=" + itemID, { method: "GET" }).then(res => res.json())
      )
    );
    let itemObjects = responses.map((res, i) => ({ ...res.details, itemID: itemsBought[i] }));
    this.setState({ itemsBought: itemObjects });
  };

  displayItemsBought = () => {
    console.log(this.state.itemsBought)
    if (Object.keys(this.state.itemsBought).length === 0) {
      return (<div>No previous items bought</div>) }
    else {
      return this.state.itemsBought.map(item => {
      return (
        <div>
          <Item itemID={item.itemID}
            image={item.image}
            name={item.itemName}
            description={item.description}
            price={item.price}
          />
        </div>
      );
    });}
  };

  render() {

    return (
      <div>
        {this.props.name && <div className="viewAccount">My Account</div>}
        <h1>Items Bought</h1>
        <div>{this.displayItemsBought()}</div>
      </div>
    );
  }
}

export default ItemsBought;
