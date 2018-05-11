import React, { Component } from "react";
import "./App.css";
import Item from "./Item.js";

class UserItems extends Component {
  constructor() {
    super();

    this.state = {userItems:[]};
  }
  componentDidMount() {
    fetch("/getUserItems?userID=" + this.props.userID, {
      method: "GET"
    })
      .then(response => response.text())
      .then(responseBody => {
        let parsed = JSON.parse(responseBody);
        if (parsed.success){
        let userItems = parsed.itemIDs;
        this.setUserItems(userItems);
        }
      
      });
  }

  setUserItems = async userItems => {
    let responses = await Promise.all(
      userItems.map(itemID => 
        fetch("getItemDetails?itemID=" + itemID, { method: "GET" }).then(res => res.json())
      )
    );
    let itemObjects = responses.map((res, i) => ({ ...res.details, itemID: userItems[i] }));
    this.setState({ userItems: itemObjects });
  };

  displayUserItems = () => {

    if (Object.keys(this.state.userItems).length === 0) {
      return (<div>No items currently listed</div>) }
    else {
      return this.state.userItems.map(item => {
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
    });}
  };

  render() {

    return (
      <div>
        {this.props.name && <div className="viewAccount">My Account</div>}
        <h1>My Items</h1>
        <div className="accountItems">{this.displayUserItems()}</div>
      </div>
    );
  }
}

export default UserItems;
