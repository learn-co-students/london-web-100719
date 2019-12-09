import React from "react";

export default function BreadCard(props) {
  return (
    <li>
      <div id={`bread-card-${props.breadName}`}>
        <h3>{props.breadName}</h3>
        <span>🍞</span>
      </div>
    </li>
  );
}
