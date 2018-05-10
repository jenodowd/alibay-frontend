import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        let itemsSold = parsed.itemIDs;
        this.setSoldItems(itemsSold);
      });
  }

  setSoldItems = async itemsSold => {
    let responses = await Promise.all(
      itemsSold.map(itemID => 
        fetch("getItemDetails?itemID=" + itemID, { method: "GET" }).then(res => res.json())
      )
    );
    let itemObjects = responses.map((res, i) => ({ ...res.details, itemID: itemsSold[i] }));
    this.setState({ itemsSold: itemObjects });
  };

  displayItemsSold = () => {
    return this.state.itemsSold.map(item => {
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
        <div>Items Sold</div>
        <div>{this.displayItemsSold()}</div>
        <div><Link className="link" to={'/viewaccount'}>Return to your account</Link></div>
      </div>
    );
  }
}

export default ItemsSold;
