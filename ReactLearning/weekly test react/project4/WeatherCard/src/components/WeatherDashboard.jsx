import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherDashboard = () => {
  const cities = [
    { id: 1, city: "Chennai", temperature: 34, condition: "Sunny" },
    { id: 2, city: "Bengaluru", temperature: 26, condition: "Cloudy" },
    { id: 3, city: "Mumbai", temperature: 32, condition: "Rainy" },
    { id: 4, city: "Delhi", temperature: 29 }, // no condition → default Sunny
  ];

  return (
    <div className="weather-dashboard">
      {cities.map((c) => (
        <WeatherCard
          key={c.id}
          city={c.city}
          temperature={c.temperature}
          condition={c.condition}
        />
      ))}
    </div>
  );
};

export default WeatherDashboard;
