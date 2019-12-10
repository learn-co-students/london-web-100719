import React from "react";

export default class BreadCard extends React.Component {
  state = {
    pizzafied: false
  };

  pizzafy = () => {
    this.setState({
      pizzafied: !this.state.pizzafied
    });
  };

  isPizza = () => {
    if (this.state.pizzafied) {
      return "🍕";
    } else {
      return "🍞";
    }
  };

  render() {
    return (
      <li onClick={this.pizzafy}>
        <div id={`bread-card-${this.props.breadName}`}>
          <h3>
            {this.state.pizzafied ? "PIZZA" : this.props.breadName}{" "}
            {this.isPizza()}
          </h3>
        </div>
      </li>
    );
  }
}
