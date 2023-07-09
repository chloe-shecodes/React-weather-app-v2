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
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      feelingTemp: response.data.temperature.feels_like,
      currentIcon: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `cd2bcfo5ae203b19202a5050tb1b3849`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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
