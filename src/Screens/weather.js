import React, { useState, useEffect } from "react";
import { WeatherAnima } from "../components/Loader";
import axios from "axios";


import "../Styles/weather.scss";
const api = {
  key: "fae1f05a821e7e782de9f500e76998a4",
  base: "https://api.openweathermap.org/data/2.5/weather?",
};

let i = 0;
function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // https://i.gifer.com/Xst4.gif
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  const callweather = ({ location }) => {
    fetch(`${api.base}q=${location}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };



  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)

    })
    i++
    if (latitude > 0 && longitude > 0 && i === 3) {
      axios.get(`${api.base}lat=${latitude}&lon=${longitude}&appid=${api.key}`).then((response) => {
        const location = response.data.name
        callweather({ location })
      })
    }
  })
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="row">
            <div className="column">
              <div
                className={`weather-contrainer ${weather.weather[0].main}`}
                id="weather-contrainer"
              >
                <div className="location-box">
                  <div className="weather-box">
                    <div className="weather">
                      {weather.weather[0].main}{" "}
                      <img className="symbol" alt="lcok" />
                    </div>
                    <div className="temp">
                      Temperture: {Math.round(weather.main.temp)}°c
                    </div>
                    <div className="temp">
                      Humidity: {Math.round(weather.main.humidity)}%
                    </div>
                    <div className="temp">
                      Feels like: {Math.round(weather.main.feels_like)}°c
                    </div>
                  </div>
                  <div className="location">
                    {weather.name}, {weather.sys.country}
                  </div>
                  <div className="date">{dateBuilder(new Date())}</div>
                </div>
              </div>
            </div>
            <div className="column">{/* <Mymaps /> */}</div>
          </div>
        ) : (
          <div className="loading">
            <h3 className="text">Enter City name in the Search Box above</h3>
            <WeatherAnima />
          </div>
        )}
      </main>
    </div>
  );
}

export default Weather;
