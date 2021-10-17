import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Switcher.scss";
import { Switcher } from "./switcher";
import NavBar from "./Nav";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Button, Nav } from "react-bootstrap";
import {
  GlobalStyles,
  StyledApp,
  lightTheme,
  darkTheme,
  Theme,
  themeToggler,
} from "./themes.js";

function Main() {
  const sTheme = Theme();

  return (
    <ThemeProvider  theme={sTheme.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp className="style">
        <Nav id="nav">
          <NavBar />
          <Button
            variant="outline-primary"
            id="darkmode"
            onClick={() => themeToggler(sTheme.theme, sTheme.setTheme)}
          >
            Darkmode
          </Button>
          <Switcher />
        </Nav>
        <App />
      </StyledApp>
    </ThemeProvider>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
ReactDOM.render(<>this is About us</>, document.getElementById("Aboutus"));
// ReactDOM.render(<NavBar/>,document.getElementById("nav"));
