import React from "react";

export default class BreadCard extends React.Component {
  render() {
    console.log(this.__proto__.constructor.name, "did render");
    return (
      <li onClick={this.props.pizzafy}>
        <div id={`bread-card-${this.props.breadName}`}>
          <h3>{this.props.pizzafied ? "PIZZA" : this.props.breadName}</h3>
        </div>
      </li>
    );
  }
}
