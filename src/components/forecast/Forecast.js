import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import styles from "./Forecast.module.scss";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <>
      <label className={styles.title}>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles.dailyItem}>
                  <img
                    className={styles.iconSmall}
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <label className={styles.day}>{forecastDays[idx]}</label>
                  <label className={styles.description}>
                    {item.weather[0].description}
                  </label>
                  <label className={styles.minMax}>
                    {Math.round(item.main.temp_min)}&#8451; /{" "}
                    {Math.round(item.main.temp_max)}&#8451;
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.dailyDetailsGrid}>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Sea Level</label>
                  <label>{item.main.sea_level} hPa</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Feels Like</label>
                  <label>{Math.round(item.main.feels_like)}&#8451;</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
