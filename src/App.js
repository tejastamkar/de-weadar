import React from "react";
import { Nav } from "react-bootstrap";
import { Switcher } from "./switcher";
import NavBar from "./Nav";

function swtichcase(theme) {
  switch (theme) {
    case "black":
      document.getElementById("main").style.background = "black";
      break;
    case "blue":
      document.getElementById("main").style.background = "#e8faff";
      break;
    case "pink":
      document.getElementById("main").style.background = "#ffe8fa";
      break;
    case "red":
      document.getElementById("main").style.background = "#ffe8e8";
      break;
    case "yellow":
      document.getElementById("main").style.background = "#feffe8";
      break;
    case "lavendar":
      document.getElementById("main").style.background = "#ffe8fe";
      break;
    case "green":
      document.getElementById("main").style.background = "#e8ffec";
      break;
  }
}

function App() {
  const mtheme = Switcher(),
    Setmtheme = mtheme.sets;
  swtichcase(mtheme.colorTheme);
  return (
    <div className={`style ${mtheme.colorTheme}`} id="bg">
      <>
        <Nav id="nav">
          <NavBar />
          <Setmtheme />
        </Nav>
        <h1 className="head">This is Our Weather App Page</h1>
        <h3 className="sub">This Space is for Feed</h3>
      </>
    </div>
  );
}

export default App;
