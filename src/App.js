import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Item from './Item.js';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import MainNav from './MainNav.js';
import AccountNav from './AccountNav.js';
import Search from './Search.js';
import { listings } from './FakeData.js';
import { itemIDS } from './FakeData.js';
//import './App.css';


let allItems = itemIDS.map(itemID => <div className="items"><Item 
image={listings[itemID].image}
name={listings[itemID].itemName}
description={listings[itemID].description} 
price ={listings[itemID].price}  /></div>)

let renderAllItems = () => {
  return (<div className = "searchContainer"><Search /><div className="allItems">{allItems}</div></div>)
}

// let renderSignIn = () => {
//   return <SignIn />
// }

class App extends Component {
  render() {
    return (<div>
        <div>
        <BrowserRouter>
        <div>
          <AccountNav />
          <MainNav />
          <Route exact={true} path='/' render={renderAllItems} />
          <Route exact={true} path='/signup' component={SignUp}/>
          <Route exact={true} path='/signin' component={SignIn}/>
        </div>
        </BrowserRouter>
      </div>
      </div>
    );
  }
}

export default App;
