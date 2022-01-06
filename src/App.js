import React, { useState, useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Switcher } from "./components/switcher";
import NavBar from "./components/Nav";
import Weather from "./Screens/weather";
import DailyBulletin from "./components/NewsFetch";
import { AboutUs } from "./Screens/aboutus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PreLoader } from "./components/Loader";

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

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <div className={`style ${mtheme.colorTheme}`} id="bg">
      {!completed ? (
        <>
          <PreLoader />
        </>
      ) : (
        <Router>
          <Navbar id="nav">
            <Container>
              <NavBar />
            </Container>
            <Setmtheme />
          </Navbar>
          {/* <Weather /> */}
          {/* <div style={{ flex: 1, flexDirection: "row" }}>
            <h1 className="Dailytxt" id="Dailytext">
              DailyBulletin
            </h1>
            <Button className="DailyBtn" variant="outline-primary">
              View All
            </Button>
          </div> */}
          {/* <DailyBulletin />
          <AboutUs /> */}
          <Switch>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/DailyBulletin">
              <DailyBulletin />
            </Route>
            <Route path="/">
              <Weather />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
