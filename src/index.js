import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./Styles/Switcher.scss";
import App from "./App";

function Main() {
  return <App />;
}

ReactDOM.render(<Main />, document.getElementById("root"));
serviceWorker.unregister();
