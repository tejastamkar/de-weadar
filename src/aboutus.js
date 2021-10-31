import React from "react";
import "./aboutus.css";
import gif from "./imageone.gif";


export function AboutUs() {
  return (
    <div>
      <div className="section" id="aboutus">
        <div className="containers">
          <div className="content-section">
            <div className="title">
              <h1>About Us</h1>
            </div>
            <div className="content">
              <h3>Weather App</h3>
              <p>
                This Weather App project is to explore the wider exchange and
                availability of official weather information on the Internet.
                This web app is developed and maintained by the students of K.C
                College of Engineering Management & Research Studies. This web
                app presents official weather observations, weather forecasts
                and climatological information for selected cities. Weather
                icons are shown alongside worded forecasts in this to facilitate
                visual inspection.
              </p>
              {/* <div class="button my-4 ">
                <a href="">Know More</a>
              </div> */}
            </div>
          </div>
          <div className="image-section">
            <img src={gif} alt="IconImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
