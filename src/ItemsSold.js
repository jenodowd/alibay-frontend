
    import React, { Component } from 'react';
    import { Link } from 'react-router-dom';
    import './App.css';
    
    
    class ItemsSold extends Component {
        constructor() {
          super();
    
        }
    renderItemsSold = () =>{
        fetch('/getItemsSold?userID='+this.props.userID, { method: 'GET'})
        .then(response =>response.text())
        .then(responseBody => this.setState({itemsSold: responseBody.itemdIDs}))
        
        fetch('getItemDetails?itemID='+this.state.itemsSold, {method: 'GET'})
        .then(response=>response.text())
        .then(responseBody=>console.log(responseBody))
      }


      render() {
        return (
          <div>
          {this.props.name && <div className="viewAccount">My Account</div>}
          {this.renderItemsSold}
          </div>
              )
            }
          }

      export default ItemsSold;