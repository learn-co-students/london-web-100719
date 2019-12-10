import React from "react";

export default class SearchBox extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="breadSearch">search for bread </label>
        <input
          id="breadSearch"
          placeholder="search for bread"
          value={this.props.searchValue}
          onChange={this.props.handleSearchChange}
        />
      </div>
    );
  }
}
