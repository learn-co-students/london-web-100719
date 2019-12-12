import React from "react";
import BreadCard from "./BreadCard";

class BreadList extends React.Component {
  render() {
    return (
      <div>
        <h2>Bread List</h2>
        {this.props.breadTypes.length > 0 ? null : "LOADING"}
        <ul>
          {this.props.breadTypes.map(breadObject => (
            <BreadCard
              key={breadObject.name}
              breadName={breadObject.name}
              pizzafied={breadObject.pizzafied}
              pizzafy={this.props.pizzafy}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default BreadList;
