import React from "react";
import BreadList from "./BreadList";
import SearchBox from "./SearchBox";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breadTypes: [],
      searchValue: ""
    };
  }

  componentDidMount() {
    console.log(this.__proto__.constructor.name, "mounting");
    fetch("http://localhost:3001/breads")
      .then(breadData => breadData.json())
      .then(breadData => {
        this.setState({ breadTypes: breadData });
      });
  }
  handleSearchChange = event => {
    this.setState({
      searchValue: event.target.value
    });
  };

  filterSearchResults = () => {
    return this.state.breadTypes.filter(bread =>
      bread.name.includes(this.state.searchValue)
    );
  };

  pizzafy = e => {
    const breadToPizzafy = this.state.breadTypes.find(bread =>
      bread.name.includes(e.target.innerText)
    );
    this.setState({
      breadTypes: this.state.breadTypes.map(bread => {
        if (bread == breadToPizzafy) {
          bread.pizzafied = !bread.pizzafied;
        }
        return bread;
      })
    });
  };

  render() {
    return (
      <div>
        <h1>Bread Shop</h1>
        <SearchBox
          handleSearchChange={this.handleSearchChange}
          searchValue={this.state.searchValue}
        />
        <BreadList
          breadTypes={this.filterSearchResults()}
          pizzafy={this.pizzafy}
        />
      </div>
    );
  }
}
