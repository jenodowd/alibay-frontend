import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Item from "./Item.js";
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
import MainNav from "./MainNav.js";
import AccountNav from "./AccountNav.js";
import SideNav from "./SideNav.js";
import CreateListing from "./CreateListing.js";
import Details from "./Details.js";
import "./App.css";
import ViewAccount from "./ViewAccount.js";
import ItemsBought from "./ItemsBought";
import ItemsSold from "./ItemsSold";
import Cart from "./Cart.js";
import Search from "./Search.js";

// let renderAllItems = () => {
//   return (<div className="sideNavContainer"><SideNav /><div className="allItems">{allItems}</div></div>)
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      userID: undefined,
      listings: {},
      showSignUp: false,
      showSignIn: false,
      showCreateListing: false,
      email: undefined,
      searchResults: false,
      counter: 0
    };
  }
  componentDidMount() {
    fetch("/allListings", {
      method: "GET"
    })
      .then(res => res.text())
      .then(resB => {
        let parsed = JSON.parse(resB);
        let listings = parsed.listings;
        this.setState({ listings: listings });
      });
  }
  setName = name => {
    this.setState({ name });
  };

  setUserID = userID => {
    this.setState({ userID });
  };

  setEmail = email => {
    this.setState({ email });
  };

  renderViewAccount = () => {
    return (
      <ViewAccount
        name={this.state.name}
        userID={this.state.userID}
        email={this.state.email}
      />
    );
  };

  // renderCreateListing = () => {
  //   return <CreateListing userID={this.state.userID} />
  //  }

  renderListings = () => {
    if (Object.keys(this.state.listings).length === 0) {
      return <div>No results...please search again</div>;
    } else {
      let top = this.state.searchResults && (
        <div>{Object.keys(this.state.listings).length} results</div>
      );

      let bot = Object.keys(this.state.listings).map(itemID => {
        return (
          <div className="items">
            <div className="items">
              <Item
                itemID={itemID}
                image={this.state.listings[itemID].image}
                name={this.state.listings[itemID].itemName}
                description={this.state.listings[itemID].description}
                price={this.state.listings[itemID].price}
              />
            </div>
          </div>
        );
      });
      return (
        <div>
          {top}
          {bot}
        </div>
      );
    }
  };

  renderAllItems = () => {
    return (
      <div className="sideNavContainer">
        <SideNav setSearchItemIDs={this.setSearchItemIDs} />
        <div className="allItems">{this.renderListings()}</div>
      </div>
    );
  };

  //RENDER BY PRICE
  //LOW TO HIGH

  renderLowToHigh = () => {
    let sortedListingIDs = Object.keys(this.state.listings).sort(
      (key1, key2) => {
        return (
          this.state.listings[key1].price - this.state.listings[key2].price
        );
      }
    );

    return sortedListingIDs.map(itemID => {
      return (
        <div className="items">
          <Item
            itemID={itemID}
            image={this.state.listings[itemID].image}
            name={this.state.listings[itemID].itemName}
            description={this.state.listings[itemID].description}
            price={this.state.listings[itemID].price}
          />
        </div>
      );
    });
  };

  renderItemsLowToHigh = () => {
    return (
      <div className="sideNavContainer">
        <SideNav setSearchItemIDs={this.setSearchItemIDs} />
        <div className="allItems">{this.renderLowToHigh()}</div>
      </div>
    );
  };

  //

  renderHighToLow = () => {
    let sortedListingIDs = Object.keys(this.state.listings).sort(
      (key1, key2) => {
        return (
          this.state.listings[key2].price - this.state.listings[key1].price
        );
      }
    );

    return sortedListingIDs.map(itemID => {
      return (
        <div className="items">
          <Item
            itemID={itemID}
            image={this.state.listings[itemID].image}
            name={this.state.listings[itemID].itemName}
            description={this.state.listings[itemID].description}
            price={this.state.listings[itemID].price}
          />
        </div>
      );
    });
  };

  renderItemHighToLow = () => {
    return (
      <div className="sideNavContainer">
        <SideNav setSearchItemIDs={this.setSearchItemIDs} />
        <div className="allItems">{this.renderHighToLow()}</div>
      </div>
    );
  };

  //

  renderUnder25 = () => {
    let sortedListingIDs = Object.keys(this.state.listings);

    return sortedListingIDs.map(itemID => {
      if (this.state.listings[itemID].price <= 25) {
        return (
          <div className="items">
            <Item
              itemID={itemID}
              image={this.state.listings[itemID].image}
              name={this.state.listings[itemID].itemName}
              description={this.state.listings[itemID].description}
              price={this.state.listings[itemID].price}
            />
          </div>
        );
      }
    });
  };

  renderItemsUnder25 = () => {
    return (
      <div className="sideNavContainer">
        <SideNav setSearchItemIDs={this.setSearchItemIDs} />
        <div className="allItems">{this.renderUnder25()}</div>
      </div>
    );
  };

  //

  renderPopular = () => {
    let sortedListingIDs = Object.keys(this.state.listings).reverse();

    return sortedListingIDs.map(itemID => {
        return (
          <div className="items">
            <Item
              itemID={itemID}
              image={this.state.listings[itemID].image}
              name={this.state.listings[itemID].itemName}
              description={this.state.listings[itemID].description}
              price={this.state.listings[itemID].price}
            />
          </div>
        );
    });
  };

  renderPopularItems = () => {
    return (
      <div className="sideNavContainer">
        <SideNav setSearchItemIDs={this.setSearchItemIDs} />
        <div className="allItems">{this.renderPopular()}</div>
      </div>
    );
  };

  //

  renderItemsBought = () => {
    return <ItemsBought userID={this.state.userID} />;
  };

  renderItemsSold = () => {
    return <ItemsSold userID={this.state.userID} />;
  };

  renderDetails = routerData => {
    return (
      <Details
        itemID={routerData.match.params.id}
        userID={this.state.userID}
        counter={this.setUpCounter}
      />
    );
  };

  //POPUPS

  renderSignUp = () => {
    this.setState({ showSignUp: true });
  };

  closeSignUp = () => {
    this.setState({ showSignUp: false });
  };

  renderSignIn = () => {
    this.setState({ showSignIn: true });
  };

  closeSignIn = () => {
    this.setState({ showSignIn: false });
  };

  renderCreateListing = () => {
    this.setState({ showCreateListing: true });
  };

  closeCreateListing = () => {
    this.setState({ showCreateListing: false });
  };

  //

  renderCart = routerData => {
    return <Cart userID={routerData.match.params.userID} />;
  };

  renderSearchItems = () => {
    return <Search setSearchItemIDs={this.setSearchItemIDs} />;
  };

  setSearchItemIDs = items => {
    this.setState({ listings: items, searchResults: true });
    this.renderListings();
  };

  setUpCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    let createlisting = (() => {
      if (this.state.showCreateListing === true) {
        return (
          <CreateListing
            userID={this.state.userID}
            closeCreateListing={this.closeCreateListing}
          />
        );
      } else {
        return null;
      }
    })();
    let signUp = (() => {
      if (this.state.showSignUp === true) {
        return <SignUp closeSignUp={this.closeSignUp} />;
      } else {
        return null;
      }
    })();
    let signIn = (() => {
      if (this.state.showSignIn === true) {
        return (
          <SignIn
            setName={this.setName}
            setUserID={this.setUserID}
            setEmail={this.setEmail}
            closeSignIn={this.closeSignIn}
          />
        );
      } else {
        return null;
      }
    })();
    return (
      <div>
        <div>
          <BrowserRouter>
            <div>
              {signUp}
              {signIn}
              {createlisting}
              <AccountNav
                renderSignUp={this.renderSignUp}
                renderSignIn={this.renderSignIn}
                renderCreateListing={this.renderCreateListing}
                name={this.state.name}
                userID={this.state.userID}
                counter={this.state.counter}
              />
              <div className="content">
                <Route exact={true} path="/" render={this.renderAllItems} />
                <Route
                  exact={true}
                  path="/lowtohigh"
                  render={this.renderItemsLowToHigh}
                />
                <Route
                  exact={true}
                  path="/hightolow"
                  render={this.renderItemHighToLow}
                />
                <Route
                  exact={true}
                  path="/deals"
                  render={this.renderItemsUnder25}
                />
                <Route
                  exact={true}
                  path="/popular"
                  render={this.renderPopularItems}
                />
                <Route
                  exact={true}
                  path="/viewaccount"
                  render={this.renderViewAccount}
                />
                <Route
                  exact={true}
                  path="/itemsbought"
                  render={this.renderItemsBought}
                />
                <Route
                  exact={true}
                  path="/itemssold"
                  render={this.renderItemsSold}
                />
                <Route
                  exact={true}
                  path="/details/:id"
                  render={this.renderDetails}
                />
                <Route
                  exact={true}
                  path="/cart/:userID"
                  render={this.renderCart}
                />
              </div>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
