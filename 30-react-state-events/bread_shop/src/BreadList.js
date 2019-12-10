import React from "react";
import BreadCard from "./BreadCard";

function BreadList(props) {
  return (
    <div>
      <h2>Bread List</h2>
      <ul>
        {props.breadTypes.map(breadName => (
          <BreadCard key={breadName} breadName={breadName} />
        ))}
      </ul>
    </div>
  );
}

export default BreadList;
