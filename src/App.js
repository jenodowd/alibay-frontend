import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Item from './Item.js';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import MainNav from './MainNav.js';
import AccountNav from './AccountNav.js';
import SideNav from './SideNav.js';
import CreateListing from './CreateListing.js';
import Details from './Details.js';
import './App.css';
import ViewAccount from './ViewAccount.js';
import ItemsBought from './ItemsBought';
import ItemsSold from './ItemsSold'

// let renderAllItems = () => {
//   return (<div className="sideNavContainer"><SideNav /><div className="allItems">{allItems}</div></div>)
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      userID: undefined,
      listings : {},
      loginP : false,
    }
  }
  componentDidMount() {
    fetch('/allListings', {
      method: 'GET'
    }).then(res => res.text())
      .then(resB => {
        let parsed = JSON.parse(resB)
        let listings = parsed.listings;
        this.setState({listings: listings})
      })
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

  renderListings = () => {
    //return (<div>HEY</div>)
     //console.log(this.state.listings)
    return Object.keys(this.state.listings).map(itemID =>{
      return (<div className="items">
        <Item itemID={itemID} image={this.state.listings[itemID].image} name={this.state.listings[itemID].itemName} 
        description={this.state.listings[itemID].description} price ={this.state.listings[itemID].price} />
      </div>)})
  
  }

  renderAllItems = () => {
    return (<div className="sideNavContainer"><SideNav /><div className="allItems">{this.renderListings()}</div></div>)
  }

  renderItemsBought = () =>{
    return <ItemsBought userID={this.state.userID} />
  }

  renderItemsSold = () =>{
    return <ItemsSold userID={this.state.userID} />
  }

  renderDetails = (routerData) => {
    return (<Details itemID={routerData.match.params.id} />)
  }

  F_GoLogin = () => {
    this.setState({loginP:true})
  }

  F_CloseModal = () => {
    this.setState({loginP:false})
  }

  render() {
    var signup = (()=>{if(this.state.loginP===true){return(<SignUp F_CloseModal={this.F_CloseModal}/>)}else{return null}})()
    return (<div>
        <div> 
        <BrowserRouter>
        <div>
          {signup}
          <AccountNav F_GoLogin={this.F_GoLogin} name={this.state.name} />
          <MainNav />
          <Route exact={true} path='/' render={this.renderAllItems} />
          {/* <Route exact={true} path='/signup' component={SignUp}/> */}
          <Route exact={true} path='/signin' render={this.renderSignIn}/>
          <Route exact={true} path='/viewaccount' render={this.renderViewAccount}/>
          <Route exact={true} path='/createlisting' render={this.renderCreateListing}/>
          <Route exact={true} path='/itemsbought' render={this.renderItemsBought}/>
          <Route exact={true} path='/itemssold' render={this.renderItemsSold} />
          <Route exact={true} path='/details/:id' render={this.renderDetails} />
        </div>
        </BrowserRouter>
      </div>
      </div>
    );
  }
}
export default App;
