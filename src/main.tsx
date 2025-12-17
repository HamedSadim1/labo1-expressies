/**
 * Hoofdingangspunt van de React applicatie
 *
 * Deze file initialiseert de React applicatie door:
 * - Het root element te vinden in de DOM
 * - De App component te renderen in StrictMode voor ontwikkel hulp
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
