import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './App.css';

class CreateListing extends Component {
  constructor() {
    super();

    this.state = {
      userIDInput: undefined,
      nameInput: undefined,
      priceInput: undefined,
      descriptionInput: undefined,
      imageInput: undefined,
      tagsInput: undefined,
    }

  }

  handleUserIDChange = (event) => {
    this.setState({ userIDInput: event.target.value })
  }

  handleNameChange = (event) => {
    this.setState({ nameInput: event.target.value })
  }

  handlePriceChange= (event) => {
    this.setState({ priceInput: event.target.value })
  }

  handleDecriptionChange = (event) => {
    this.setState({ descriptionInput: event.target.value })
  }

  handleTagsChange = (event) => {
    this.setState({ tagsInput: event.target.value })
  }


  uploadFile = (x) => {
    console.log(x);
    let filename = x.name;
    let fileExtension = filename.split('.').pop();
    fetch('/uploadPic?ext=' + fileExtension,{
      method: "POST",
      body: x
    })
    .then(response => response.text())
    .then(response => this.setState({imageInput: response}))
    .then(() => console.log(this.state.imageInput))
  }

  handleCreateListingSubmit = (event) => {
    event.preventDefault();
    let bod = JSON.stringify(
      {
        userId: this.props.userID,
        name: this.state.nameInput,
        price: this.state.priceInput,
        description: this.state.descriptionInput,
        tags: this.state.tags,
        image: this.state.imageInput,
      }
    )

    fetch('/createListing', { method: 'POST', body: bod })
    .then(response => response.text())
    .then(responseBody => console.log(responseBody))

  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleCreateListingSubmit}>

          <input className="inputField" placeholder="Name"
            type="text"
            value={this.nameInput}
            onChange={this.handleNameChange}>
          </input>

          <br /><br />

          <input className="inputField" placeholder="Price"
            type="text"
            value={this.priceInput}
            onChange={this.handlePriceChange}>
          </input>

          <br /><br />

          <textarea className="inputField" placeholder="Description"
            type="text"
            value={this.descriptionInput}
            onChange={this.handleDecriptionChange}>
          </textarea>

          <br /><br />

          <textarea className="inputField" placeholder="Tags eg: vintage, sweater, wool"
            value={this.tagsInput}
            onChange={this.handleTagsChange}>
          </textarea>

          <br /><br />

          <input type="file" id="input" onChange={e => this.uploadFile(e.target.files[0])} /> 

          <br /><br />

          <input type="submit"></input>

        </form>

      </div>
    )
  }
}

export default CreateListing;