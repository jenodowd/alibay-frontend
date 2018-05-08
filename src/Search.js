import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './App.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: undefined,
    }
  }

handleSearchChange = (event) => {
  this.setState({ searchInput: event.target.value })
}

handleSearchSubmit = (event) => {
  event.preventDefault();
  let bod = JSON.stringify(
    {
      search: this.state.searchInput,
    }
  )

  fetch('/searchForListings', { method: 'GET', body: bod })
}

render() {
  return (
    <div className="search">
      <form onSubmit={this.handleSearchSubmit}>
        <input type="text" value={this.searchInput} onChange={this.handleSearchChange}></input>
        <input type="submit"></input>
      </form>
    </div>
    )
  }
}

export default Search;