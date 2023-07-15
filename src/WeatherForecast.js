import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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
