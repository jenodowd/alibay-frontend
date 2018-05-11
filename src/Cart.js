import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Item from "./Item.js";
import TakeMoney from "./Stripe.js"

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      itemIDs: [],
      sum: ''
    };
  }

  componentDidMount() {
    this.getAllItems();
    window.paypal.Button.render({

      env: 'sandbox',

      client: {
          sandbox:    'AUd8sqBl5MJa4CHKQOjvkxQWN06fIRRPFO11uVRvTauWae6TSP4w2ERfDhUa_KUJmPaqGLF48zIDrbBZ',
      },

      commit: true, // Show a 'Pay Now' button

      payment: (data, actions) => {
        console.log(this.state.sum)
          return actions.payment.create({
              payment: {
                  transactions: [
                      {
                          amount: { total: this.state.sum, currency: 'CAD' }
                      }
                  ]
              }
          });
      },

      onAuthorize: function(data, actions) {
          return actions.payment.execute().then(function(payment) {

              // The payment is complete!
              // You can now show a confirmation message to the customer
          });
      }

  }, '#paypal-button');
  }

  getAllItems = () => {
    fetch("/getCart?userID=" + this.props.userID, {
      method: "GET"
    })
      .then(res => res.text())
      .then(resB => {
        let parsed = JSON.parse(resB);
        let itemIDs = parsed.itemIDs;
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

    let cartTotal = Object.keys(responses).map((res) => {return responses[res].details.price})
    let sum=0;
    for (let i=0; i<cartTotal.length; i++) {
      sum += parseInt(cartTotal[i]);
    }
    this.setState({ itemIDs: itemObjects, sum: sum});
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
      return (
        <div className="items">
          <Item
            itemID={item.itemID}
            image={item.image}
            name={item.itemName}
            description={item.description}
            price={item.price}
            removeBtn
            removeCart={this.removeCart}
          />
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
        <div className="cartDetails">
        <div>
          <button className="returnButton">
            <Link className="link" to={"/viewaccount"}>BACK TO ACCOUNT
            </Link>
          </button>
        </div>
        <div id="paypal-button"></div>
        <div className="stripe"><TakeMoney/></div>
        <div className="cartTotal">CART TOTAL: ${this.state.sum}</div>
      </div>
    </div>
    );
  }
}

export default Cart;
