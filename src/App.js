import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Switcher } from "./switcher";
import NavBar from "./components/Nav";
import Weather from "./weather";
import DailyBulletin from "./components/NewsFetch";
import { AboutUs } from "./aboutus";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

// import * as serviceWorker from './serviceWorker';

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
      document.getElementById("main").style.background = "#fddbfc";
      break;
    case "green":
      document.getElementById("main").style.background = "#e8ffec";
      break;
    default:
      break;
  }
}

function App() {
  const mtheme = Switcher(),
    Setmtheme = mtheme.sets;
  swtichcase(mtheme.colorTheme);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  
  var color = "#000";
  if (mtheme.colorTheme === "black") {
    color = "#fff";
  } else {
    color = "#000";
  }

  const override = css`
    margin: 20% auto;
    display: block;
    border: red;
  `;
  return (
    <div className={`style ${mtheme.colorTheme}`} id="bg">
      {loading ? (
        <HashLoader
          className="loader"
          loading={loading}
          size={170}
          color={color}
          css={override}
        />
      ) : (
        <>
          <Navbar id="nav">
            <Container>
              <NavBar />
            </Container>
            <Setmtheme />
          </Navbar>
          <Weather />
          <h1 className="Dailytxt" id="Dailytext">
            DailyBulletin
          </h1>
          <DailyBulletin />
          <AboutUs />
        </>
      )}
    </div>
  );
}

export default App;
