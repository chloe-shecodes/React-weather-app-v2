import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let city = props.data.city;
  let apiKey = "cd2bcfo5ae203b19202a5050tb1b3849";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img
            src={props.data.currentIcon}
            alt="icon"
            className="WeatherForecast-icon"
          />
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-temp-max">19° </span>
            <span className="WeatherForecast-temp-min">| 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
