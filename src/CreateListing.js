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
      category: "",
      imageInputName: ""
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
    this.setState({ category: event.target.value });
  };

  uploadFile = x => {
    console.log(document.getElementById("inputPhoto"))
    let filename = x.name;
    let fileExtension = filename.split(".").pop();
    this.setState({imageInputName : x.name})
    fetch("/uploadPic?ext=" + fileExtension, {
      method: "POST",
      body: x
    })
      .then(response => response.text())
      .then(response => this.setState({ imageInput: response }))
      .then(() => this.state.imageInput);
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
      <div>
        <div className="signUpBack" onClick={this.props.closeCreateListing} />
        <div className="createListingBox">
          {this.state.submitted ? (
            <div>
              <button className="closeButton" onClick={this.props.closeCreateListing}><img className="buttonImg" alt="" src = "/x.png" /></button>
              <p>Thank you for the submission!</p>
            </div>
          ) : null}
          <button className="closeButton" onClick={this.props.closeCreateListing}><img className="buttonImg" alt="" src = "/x.png" /></button>
          <form
            className="signUpForm"
            onSubmit={this.handleCreateListingSubmit}
          >
            <h1 className = "postHeader">Create Listing</h1>
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

            <select
              value={this.state.category}
              name="Category"
              onChange={this.handleCategoryChange}
              className ="optionTest"
            >
              <option value="">Choose Category</option>
              <option>Home and Garden</option>
              <option>Fashion</option>
              <option>Accessories</option>
            </select>

            <br />
            <br />

            <textarea
              className="areaField"
              placeholder="Description"
              type="text"
              value={this.state.descriptionInput}
              onChange={this.handleDecriptionChange}
              required
            />

            <br />
            <br />

            <textarea
              className="areaField"
              placeholder="Tags eg: vintage, sweater, wool"
              value={this.state.tagsInput}
              onChange={this.handleTagsChange}
              required
            />

            <br />
            <br />

            <div className = "submitPhoto">
            <input 
              style={{display:"none"}}
              type="file"
              id="inputPhoto"
              onChange={e => this.uploadFile(e.target.files[0])}
              required
            />
            <button className="uploadButton" onClick={e => document.getElementById("inputPhoto").click()}>
            ADD PHOTO
            </button>
            <p className="imageText">{this.state.imageInputName?this.state.imageInputName:null}</p>
            </div>

            <input className = "submitButton" value="SUBMIT" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateListing;
