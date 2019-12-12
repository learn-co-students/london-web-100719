import React from "react";

export default class SearchBox extends React.Component {
  constructor() {
    super();
    console.log(this.__proto__.constructor.name, "constructor");
  }

  componentDidMount() {
    console.log(this.__proto__.constructor.name, "mounting");
  }

  componentDidUpdate() {
    console.log(this.__proto__.constructor.name, "did update");
  }

  componentWillUnmount() {
    console.log(this.__proto__.constructor.name, "will unmount");
  }

  render() {
    console.log(this.__proto__.constructor.name, "did render");

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
