import React, { useState } from "react";

import axios from "axios";

import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import Search from "./components/search/Search";
import { weatherApiOptions } from "./api";

// import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = searchData => {
    const [lat, lon] = searchData.value.split(" ");

    weatherApiOptions.params.lat = lat;
    weatherApiOptions.params.lon = lon;

    const currentWeatherFetch = axios.request("weather", weatherApiOptions);
    const forecastFetch = axios.request("forecast", weatherApiOptions);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async response => {
        const weatherResponse = await response[0].data;
        const forecastResponse = await response[1].data;

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(error => {
        console.log(error);
      });
  };

  console.log("current  : ", currentWeather);
  console.log("forecast : ", forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
