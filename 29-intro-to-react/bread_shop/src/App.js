import React from "react";
import BreadList from "./BreadList";
import "./App.css";

const breadTypes = ["pumpernickel", "sourdough", "brioche", "chleb"];

function App() {
  return (
    <div>
      <h1>Bread Shop</h1>
      <BreadList breadTypes={breadTypes} />
    </div>
  );
}

export default App;
