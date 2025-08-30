import React from "react";

const WeatherCard = ({ city, temperature, condition }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p className="temp">{temperature}°C</p>
      <p className="condition">
        {temperature > 30 ? "Hot Day 🌞" : "Cool Day ❄️"}
      </p>
      <p className="status">
        Condition: <span>{condition}</span>
      </p>
    </div>
  );
};

// ✅ Default Props
WeatherCard.defaultProps = {
  condition: "Sunny",
};

export default WeatherCard;
