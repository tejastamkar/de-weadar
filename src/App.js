import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyles,
  StyledApp,
  lightTheme,
  darkTheme,
  Theme,
  themeToggler,
} from "./themes.js";

function App() {
  const sTheme = Theme();
  return (
    <ThemeProvider theme={sTheme.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <h1 className="head">This is Our Weather App Page</h1>
        <h3 className="sub">This Space is for Feed</h3>
        <button onClick={()=> themeToggler(sTheme.theme , sTheme.setTheme)}>dark</button>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
