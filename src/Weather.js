import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";

import "./Weather.css";
import background from "./media/clouds-pink.jpg";

import myLocationIcon from "./icons/my-location.png";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      feelingTemp: response.data.main.feels_like,
      currentIcon:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    });
  }

  function handleSubmit(event) {
    event.prevenDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `bd3bb6534458ba51b48c49f5155745b6`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div
        className="weather"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="row">
          <br />
        </div>
        <form onSubmit={handleSubmit}>
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
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2 col-search-input-button">
              <input
                type="submit"
                value="Search"
                className="search-input-button"
              />
            </div>
          </div>
        </form>

        <br />
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
