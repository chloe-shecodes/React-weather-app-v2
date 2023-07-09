import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./Index.css";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";

let gitHubUrl = "https://github.com/chloe-shecodes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="index">
    <Weather defaultCity="Sydney" />

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

reportWebVitals();
