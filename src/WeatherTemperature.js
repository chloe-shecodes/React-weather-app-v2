import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="col WeatherTemperature current-degrees">
        <div>
          <div className="col current-temp">{Math.round(props.celcius)}</div>
        </div>

        <div className="col metrics">
          <ul>
            <li className="degrees-symbol">°</li>
            <li className="units">
              <span className="active">C</span> |{" "}
              <a href="/" onClick={convertToFahrenheit}>
                F
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col WeatherTemperature current-degrees">
        <div>
          <div className="col current-temp">
            {Math.round((props.celcius * 9) / 5 + 32)}
          </div>
        </div>

        <div className="col metrics">
          <ul>
            <li className="degrees-symbol">°</li>
            <li className="units">
              <a href="/" onClick={convertToCelcius}>
                C
              </a>{" "}
              | <span className="active">F</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
