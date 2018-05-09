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
      submitted: false
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
      tags: this.state.tagsInput
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
          tagsInput: ""
        });

      });
  };

  render() {
    return (
      <div>
        {this.state.submitted ? <h5>Thank you for the submission!</h5> : null}
        <form onSubmit={this.handleCreateListingSubmit}>
          <input
            className="inputField"
            placeholder="Name"
            type="text"
            value={this.state.nameInput}
            onChange={this.handleNameChange}
          />

          <br />
          <br />

          <input
            className="inputField"
            placeholder="Price"
            type="text"
            value={this.state.priceInput}
            onChange={this.handlePriceChange}
          />

          <br />
          <br />

          <textarea
            className="inputField"
            placeholder="Description"
            type="text"
            value={this.state.descriptionInput}
            onChange={this.handleDecriptionChange}
          />

          <br />
          <br />

          <textarea
            className="inputField"
            placeholder="Tags eg: vintage, sweater, wool"
            value={this.state.tagsInput}
            onChange={this.handleTagsChange}
          />

          <br />
          <br />

          <input
            type="file"
            id="input"
            onChange={e => this.uploadFile(e.target.files[0])}
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
