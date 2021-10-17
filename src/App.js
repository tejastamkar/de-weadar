import React from "react";
import { Nav } from "react-bootstrap";
import { Switcher } from "./switcher";
import NavBar from "./Nav";

function App() {
  const mtheme = Switcher(),
    Setmtheme = mtheme.sets;
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
