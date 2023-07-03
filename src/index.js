import React from "react";
import ReactDOM from "react-dom/client";
import "./Index.css";
import Weather from "./Weather";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="index">
    <Weather />
  </div>
);

reportWebVitals();
