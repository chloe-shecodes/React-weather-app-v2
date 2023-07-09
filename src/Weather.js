import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";

import axios from "axios";

import "./Weather.css";
import background from "./media/clouds-opacity.png";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  const styles = {
    background: {
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
    },
  };

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
      <div className="weather" style={styles.background}>
        <div className="row">
          <br />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3 col-10">
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
