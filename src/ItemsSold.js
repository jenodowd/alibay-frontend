
    renderItemsSold = () =>{
        fetch('/getItemsSold?userID='+this.props.userID, { method: 'GET'})
        .then(response =>response.text())
        .then(responseBody => this.setState({itemsSold: responseBody.itemdIDs}))
        
        fetch('getItemDetails?itemID='+this.state.itemsSold, {method: 'GET'})
        .then(response=>response.text())
        .then(responseBody=>console.log(responseBody))
      }