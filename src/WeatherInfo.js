import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import anemometer from "./icons/anemometer.png";
import humidity from "./icons/humidity2.png";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-wrapper container text-center">
        <div className="row align-items-center">
          <div className="col-12 current-city">{props.data.city}</div>
          <div className="col-12 current-time">
            <FormattedDate date={props.data.date} />
          </div>
          <div className="row">
            <WeatherTemperature celcius={props.data.temperature} />

            <div className="col current-icon">
              <img src={props.data.currentIcon} alt="" />
            </div>
            <div className="col weather-elements">
              <ul>
                <li>
                  <img src={anemometer} alt="anenometer" />
                  <span>{Math.round(props.data.wind)} km|h</span>
                </li>
                <li>
                  <img src={humidity} alt="humidity" className="humidity" />
                  <span> {Math.round(props.data.humidity)}%</span>
                </li>

                <li>{props.data.description}</li>
                <li>feels like {Math.round(props.data.feelingTemp)}°</li>
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
}
