import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Switcher } from "./components/switcher";
import NavBar from "./components/Nav";
import Weather from "./Screens/weather";
import DailyBulletin from "./components/NewsFetch";
import { AboutUs } from "./Screens/aboutus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PreLoader } from "./components/Loader";
import { FullCardView } from "./Screens/FullCardView";
import { Error } from "./Screens/Error_page";


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
  const [completed, setcompleted] = useState(false);
  useEffect(() => {
    // setTimeout(() => {
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((response) => response.json())
    //     .then((json) => {
    //       setTimeout(() => {
    //         setcompleted(true);
    //       }, 1000);
    //     });
    setTimeout(() => {
      setcompleted(true);
    }, 2000);


  });
  return (
    <div className={`style ${mtheme.colorTheme}`} id="bg">
      {!completed ? (
        <>
          <PreLoader />
        </>
      ) : (
        <Router>
          <Switch>

            <Route path="/" exact>
              <Navbar id="nav" >
                <Container>
                  <NavBar />
                </Container>
                <Setmtheme />
              </Navbar>
              <Weather />
            </Route>
            <Route path="/NewsView/:data">
              <FullCardView />
            </Route>
            <Route exact path="/aboutus" >
              <Navbar id="nav" >
                <Container>
                  <NavBar />
                </Container>
                <Setmtheme />
              </Navbar>
              <AboutUs />
            </Route>
            <Route exact path="/DailyBulletin" >
              <Navbar id="nav" >
                <Container>
                  <NavBar />
                </Container>
                <Setmtheme />
              </Navbar>
              <DailyBulletin />
            </Route>

            <React.Fragment>
              <Route path="*">
                <Error />
              </Route>

            </React.Fragment>

          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
