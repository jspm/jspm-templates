import React from "react";
import ReactDOM from "react-dom";

function App(props) {
  return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(<App />, document.getElementById("app"));
