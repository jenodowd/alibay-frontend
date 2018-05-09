import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Item from './Item.js';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import MainNav from './MainNav.js';
import AccountNav from './AccountNav.js';
import Search from './Search.js';
import CreateListing from './CreateListing.js';
import { listings } from './FakeData.js';
import { itemIDS } from './FakeData.js';
import './App.css';
import ViewAccount from './ViewAccount.js';


let allItems = itemIDS.map(itemID => <div className="items"><Item 
image={listings[itemID].image}
name={listings[itemID].itemName}
description={listings[itemID].description} 
price ={listings[itemID].price}  /></div>)

let renderAllItems = () => {
  return (<div className = "searchContainer"><Search /><div className="allItems">{allItems}</div></div>)
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      userID: undefined
    }
  }

  setName = (name) => {
    this.setState({ name })
  }

  setUserID = (userID) => {
    this.setState({ userID })
  }

  renderSignIn = () => {
   return <SignIn setName={this.setName} setUserID={this.setUserID}/>
  }
  
  renderViewAccount = () =>{
    return <ViewAccount name={this.state.name} userID={this.state.userID}/>
  }

  renderCreateListing = () => {
    return <CreateListing userID={this.state.userID} />
   }

  render() {
    return (<div>
        <div>
        <BrowserRouter>
        <div>
          <AccountNav name={this.state.name} />
          <MainNav />
          <Route exact={true} path='/' render={renderAllItems} />
          <Route exact={true} path='/signup' component={SignUp}/>
          <Route exact={true} path='/signin' render={this.renderSignIn}/>
          <Route exact={true} path='/viewAccount' render={this.renderViewAccount}/>
          <Route exact={true} path='/createlisting' render={this.renderCreateListing}/>
        </div>
        </BrowserRouter>
      </div>
      </div>
    );
  }
}

export default App;
