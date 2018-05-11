import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Item from "./Item.js";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      itemIDs: []
    };
  }

  componentDidMount() {
    this.getAllItems()
  }

  getAllItems = () => {
    console.log("HH")
    fetch("/getCart?userID=" + this.props.userID, {
      method: "GET"
    })
      .then(res => res.text())
      .then(resB => {
        let parsed = JSON.parse(resB);
        let itemIDs = parsed.itemIDs;
        console.log(itemIDs);
        this.getCartItemDetails(itemIDs);
      });
  };

  getCartItemDetails = async itemIDs => {
    let responses = await Promise.all(
      itemIDs.map(itemID =>
        fetch("/getItemDetails?itemID=" + itemID, { method: "GET" }).then(res =>
          res.json()
        )
      )
    );
    let itemObjects = responses.map((res, i) => ({
      ...res.details,
      itemID: itemIDs[i]
    }));
    this.setState({ itemIDs: itemObjects });
  };

  removeCart = e => {
    //console.log(e.target.name);
    let body = JSON.stringify({
      itemID: e.target.name,
      userID: this.props.userID
    });
    fetch("/removeFromCart", {
      method: "POST",
      body: body
    })
      .then(res => res.json())
      .then((res) => this.props.setCartItems(res.itemIDs))
      .then(() => this.getAllItems())
  };

  renderItems = () => {
    return this.state.itemIDs.map((item) => {
      console.log(item);
      return (
        <div className="items">
          <Item
            itemID={item.itemID}
            image={item.image}
            name={item.itemName}
            description={item.description}
            price={item.price}
          />
          <button
            name={item.itemID}
            className="removeButton"
            onClick={this.removeCart}
          >
            Remove from cart
          </button>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="card">
        {this.props.name && <div className="viewAccount">My Account</div>}
        <h2>Items in your cart</h2>
        <div>{this.renderItems()}</div>
        <div>
          <button>
            <Link className="link" to={"/viewaccount"}>
              Return to your account
            </Link>
          </button>
          <div id="paypal-button"></div>
        </div>
      </div>
    );
  }
}

export default Cart;
