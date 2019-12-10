import React from "react";
import BreadList from "./BreadList";
import SearchBox from "./SearchBox";
import "./App.css";

export default class App extends React.Component {
  state = {
    breadTypes: ["pumpernickel", "sourdough", "brioche", "chleb", "1"],
    searchValue: ""
  };

  handleSearchChange = event => {
    this.setState({
      searchValue: event.target.value
    });
  };

  filterSearchResults = () => {
    return this.state.breadTypes.filter(bread =>
      bread.includes(this.state.searchValue)
    );
  };

  render() {
    return (
      <div>
        <h1>Bread Shop</h1>
        <SearchBox
          handleSearchChange={this.handleSearchChange}
          searchValue={this.state.searchValue}
        />
        <BreadList breadTypes={this.filterSearchResults()} />
      </div>
    );
  }
}
