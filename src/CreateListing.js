import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import "./App.css";

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
      submitted: false,
      category : ""
    };
  }

  handleUserIDChange = event => {
    this.setState({ userIDInput: event.target.value });
  };

  handleNameChange = event => {
    this.setState({ nameInput: event.target.value });
  };

  handlePriceChange = event => {
    this.setState({ priceInput: event.target.value });
  };

  handleDecriptionChange = event => {
    this.setState({ descriptionInput: event.target.value });
  };

  handleTagsChange = event => {
    this.setState({ tagsInput: event.target.value });
  };

  handleCategoryChange = event => {
    // console.log("fasfa")
    // console.log(event.target.value)
    this.setState({ category: event.target.value });
  };

  uploadFile = x => {
    let filename = x.name;
    let fileExtension = filename.split(".").pop();
    fetch("/uploadPic?ext=" + fileExtension, {
      method: "POST",
      body: x
    })
      .then(response => response.text())
      .then(response => this.setState({ imageInput: response }))
      .then(() => console.log(this.state.imageInput));
  };

  handleCreateListingSubmit = event => {
    event.preventDefault();
    let bod = JSON.stringify({
      userID: this.props.userID,
      price: this.state.priceInput,
      description: this.state.descriptionInput,
      itemName: this.state.nameInput,
      image: this.state.imageInput,
      tags: this.state.tagsInput,
      category: this.state.category
    });

    fetch("/createListing", { method: "POST", body: bod })
      .then(response => response.text())
      .then(responseBody => {
        console.log(responseBody);
        this.setState({
          submitted: true,
          userIDInput: "",
          nameInput: "",
          priceInput: "",
          descriptionInput: "",
          imageInput: "",
          tagsInput: "",
          category: ""
        });
      });
  };

  render() {
    return (
      <div className = "signUp">
        {this.state.submitted ? <h5><button onClick={this.props.closeCreateListing}>close</button>Thank you for the submission!</h5> : null}
        <button onClick={this.props.closeCreateListing}>close</button>
        <form className = "signUpForm" onSubmit={this.handleCreateListingSubmit}>
          <h1>Create Listing</h1>
          <input
            className="inputField"
            placeholder="Name"
            type="text"
            value={this.state.nameInput}
            onChange={this.handleNameChange}
            required
          />

          <br />
          <br />

          <input
            className="inputField"
            placeholder="Price"
            type="text"
            value={this.state.priceInput}
            onChange={this.handlePriceChange}
            required
          />

          <br />
          <br />

          <select  value={this.state.category}  name="Category" onChange={this.handleCategoryChange}>
            <option value="" >Choose Category</option>
            <option >Home and Garden</option>
            <option >Fashion</option>
            <option >Accessories</option>
          </select>

          <br />
          <br />

          <textarea
            className="inputField"
            placeholder="Description"
            type="text"
            value={this.state.descriptionInput}
            onChange={this.handleDecriptionChange}
            required
          />

          <br />
          <br />

          <textarea
            className="inputField"
            placeholder="Tags eg: vintage, sweater, wool"
            value={this.state.tagsInput}
            onChange={this.handleTagsChange}
            required
          />

          <br />
          <br />

          <input
            type="file"
            id="input"
            onChange={e => this.uploadFile(e.target.files[0])}
            required
          />

          <br />
          <br />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateListing;
