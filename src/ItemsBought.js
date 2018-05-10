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
        let itemsBought = parsed.itemIDs;
        this.setBoughtItems(itemsBought);
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
    return this.state.itemsBought.map(item => {
      return (
        <div className="items">
          <Item itemID={item.itemID}
            image={item.image}
            name={item.itemName}
            description={item.description}
            price={item.price}
          />
        </div>
      );
    });
  };

  render() {

    return (
      <div>
        {this.props.name && <div className="viewAccount">My Account</div>}
        <div>Items Bought</div>
        <div>{this.displayItemsBought()}</div>
        <div><Link className="link" to={'/viewaccount'}>Return to your account</Link></div>
      </div>
    );
  }
}

export default ItemsBought;
