import React from "react";

import styles from "./CurrentWeather.module.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <div>
          <p className={styles.city}>{data.city}</p>
          <p className={styles.weatherDescription}>
            {data.weather[0].description}
          </p>
        </div>
        <img
          className={styles.weatherIcon}
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.temperature}>
          {Math.round(data.main.temp)}&#8451;
        </p>
        <div className={styles.details}>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Details</span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Feels like</span>
            <span className={styles.parameterValue}>
              {Math.round(data.main.feels_like)}&#8451;
            </span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Wind</span>
            <span className={styles.parameterValue}>{data.wind.speed} m/s</span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Humidity</span>
            <span className={styles.parameterValue}>{data.main.humidity}%</span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Pressure</span>
            <span className={styles.parameterValue}>
              {data.main.pressure} mB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
