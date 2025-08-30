import React from "react";
import WeatherDashboard from "./components/WeatherDashboard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🌦️ Weather Forecast</h1>
      <WeatherDashboard />
    </div>
  );
}

export default App;
