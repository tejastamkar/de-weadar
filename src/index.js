import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavBar from "./Nav";

function Main() {
  return (
    <>
      <App />
    </>
  );
}
function Nav() {
  return <NavBar />;
}
ReactDOM.render(Main(), document.getElementById("root"));
ReactDOM.render(Nav(), document.getElementById("nav"));
