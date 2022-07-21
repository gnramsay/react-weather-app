import React, { useState } from "react";

import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import Search from "./components/search/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";

import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = searchData => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      // eslint-disable-next-line max-len
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=38d4bbbb395a21580a63a047ce43594f&units=metric`
    );
    const forecastFetch = fetch(
      // eslint-disable-next-line max-len
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY.replaceAll(
        // eslint-disable-next-line quotes
        '"',
        ""
      )}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async response => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(error => {
        console.log(error);
      });
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
