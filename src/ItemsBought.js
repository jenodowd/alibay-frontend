
    import React, { Component } from 'react';
    import { Link } from 'react-router-dom';
    import './App.css';
    
    
    class ItemsBought extends Component {
        constructor() {
          super();
    
        }
    
    renderItemsBought = () =>{

        fetch('/getItemsBought?userID='+this.props.userID, { method: 'GET'})
        .then(response =>response.text())
        .then(responseBody => this.setState({itemsBought: responseBody.itemdIDs}))
        console.log("hello")
        
        fetch('getItemDetails?itemID='+this.state.itemsBought, {method: 'GET'})
        .then(response=>response.text())
        .then(responseBody=>console.log(responseBody))
      }

      render() {
        return (
          <div>
          {this.props.name && <div className="viewAccount">My Account</div>}
          {this.renderItemsBought}
          </div>
              )
            }
          }

      export default ItemsBought;