import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Item from './Item.js';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import { listings } from './FakeData.js';
import { itemIDS } from './FakeData.js';
import './App.css';


let renderAllItems = () => {
  return itemIDS.map(itemID => <Item 
      name={listings[itemID].itemName}
      description={listings[itemID].description} 
      price ={listings[itemID].price}  />)
}

// let renderSignUp = () => {
//   return <SignUp />
// }

class App extends Component {
  render() {
    return (<div>
        <div>
        <h1> test </h1>
        <BrowserRouter>
        <div>
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
