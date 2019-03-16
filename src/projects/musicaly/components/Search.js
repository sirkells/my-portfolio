import React, { Component } from "react";

class Search extends Component {
  state = { searchQuery: "" };

  searchArtist = () => {
    this.props.searchArtist(this.state.searchQuery);
  };
  updateSearchQuery = event => {
    // console.log(event.target.value);
    this.setState({ searchQuery: event.target.value });
  };
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  render() {
    return (
      <div class="ui action input">
        <input
          type="text"
          placeholder="Search for Artist"
          onChange={this.updateSearchQuery}
          onKeyPress={this.handleKeyPress}
        />
        <button class="ui icon button" onClick={this.searchArtist}>
          <i class="search icon" />
        </button>
      </div>
    );
  }
}

export default Search;
