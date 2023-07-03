import React from "react";

import "./Weather.css";
import background from "./media/clouds-pink.jpg";

import anemometer from "./icons/anemometer.png";
import humidity from "./icons/humidity2.png";
import myLocationIcon from "./icons/my-location.png";

let gitHubUrl = "https://github.com/chloe-shecodes";

export default function Weather() {
  let weatherData = {
    city: "Lisbon",
    time: "19:25",
    currentTemp: 19,
    currentIcon:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    wind: 15,
    humidity: 24,
    description: "sunny, with wind",
    feelingTemp: 20,
  };
  return (
    <div className="weather" style={{ backgroundImage: `url(${background})` }}>
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
                  {weatherData.currentTemp}
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
      <div className="forecast">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body forecast-day1">
            <h5 className="forecast-day">Mon</h5>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt=""
            />
            <div>
              <span>15°</span> |<span className="forecast-temp-min">7°</span>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body forecast-day2">
            <h5 className="forecast-day">Tue</h5>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt=""
            />
            <div>
              <span>25°</span> |<span className="forecast-temp-min">22°</span>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body forecast-day3">
            <h5 className="forecast-day">Wed</h5>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt=""
            />
            <div>
              <span>17°</span> |<span className="forecast-temp-min">10°</span>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body forecast-day4">
            <h5 className="forecast-day">Thu</h5>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
              alt=""
            />
            <div>
              <span>9°</span> |<span className="forecast-temp-min">8°</span>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body forecast-day5">
            <h5 className="forecast-day">Fri</h5>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-day.png"
              alt=""
            />
            <div>
              <span>20°</span> |<span className="forecast-temp-min">-5°</span>
            </div>
          </div>
        </div>
        <div className="row">
          <br />
        </div>
      </div>

      <div className="row">
        <br />
      </div>
      <footer className="github-text">
        <a href={gitHubUrl} className="github-link">
          Open-source code
        </a>
        , by Chloé Smits
      </footer>
    </div>
  );
}
