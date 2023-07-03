import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import background from "./media/clouds-pink.jpg";

import anemometer from "./icons/anemometer.png";
import humidity from "./icons/humidity2.png";
import myLocationIcon from "./icons/my-location.png";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState("");
  let weatherData = {
    city: "Sydney",
    time: "19:25",
    currentIcon:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    wind: 15,
    humidity: 24,
    description: "sunny, with wind",
    feelingTemp: 20,
  };
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div
        className="weather"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="row">
          <br />
        </div>
        <form>
          <div className="row">
            <div className="col-1 col-search-current-location">
              <a href="/">
                <img
                  src={myLocationIcon}
                  alt="find my location"
                  className="search-current-location"
                />
              </a>
            </div>
            <div className="mb-3 col-9">
              <input
                type="search"
                placeholder="  Enter a city..."
                className="city-input"
              />
            </div>
            <div className="col-2 col-search-input-button">
              <button type="submit" className="search-input-button">
                search
              </button>
            </div>
          </div>
        </form>

        <br />
        <div className="current-wrapper container text-center">
          <div className="row align-items-center">
            <div className="col-12 current-city">{weatherData.city}</div>
            <div className="col-12 current-time">{weatherData.time}</div>
            <div className="row">
              <div className="col current-degrees">
                <div>
                  <div className="col current-temp">
                    {Math.round(temperature)}
                  </div>
                </div>
                <div className="col metrics">
                  <ul>
                    <li className="degrees-symbol">°</li>
                    <li className="units">
                      <a href="/" className="active">
                        C
                      </a>{" "}
                      | <a href="/">F</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col current-icon">
                <img src={weatherData.currentIcon} alt="" />
              </div>
              <div className="col weather-elements">
                <ul>
                  <li>
                    <img src={anemometer} alt="anenometer" />
                    <span>{weatherData.wind} km|h</span>
                  </li>
                  <li>
                    <img src={humidity} alt="humidity" className="humidity" />
                    <span> {weatherData.humidity}%</span>
                  </li>

                  <li className="weather-description">
                    {weatherData.description}
                  </li>
                  <li>feels like {weatherData.feelingTemp}°</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <br />
            </div>
          </div>
        </div>
        <div className="row">
          <br />
        </div>
      </div>
    );
  } else {
    const apiKey = `bd3bb6534458ba51b48c49f5155745b6`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
