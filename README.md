# Weather App

The base code for this app is from the freeCodeCamp [React Weather
App](https://www.freecodecamp.org/news/use-react-and-apis-to-build-a-weather-app/).
I intend to add additional functionality and tweaks to it.

## Getting started

1) You need a recent version of [Node JS](https://nodejs.org) installed on your computer.
2) Clone this repository into a local folder and change directory into the repository.
3) Run `yarn install` or `npm install` depending on your preference
4) Rename the `.env.example` file as `.env`, and fill in your own API keys for
   the City and Weather API's. Both these are free to sign up and use:
   - [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities/)
   - [OpenWeather API](https://openweathermap.org/)
5) From the root of the repository folder run `yarn start` or `npm start`. The
   browser will not open automatically (as I find that bloody annoying while
   developing) so navigate to <http://localhost:3000> in your browser.

## Changes so far

- Removed all API keys from code and placed into a `.env` file.
- Changed CSS to use css-modules, and rewrote as basic SCSS.

## Plans

### Improvements to Add

- Responsive design.
- Add Dark/Light mode.
- Pull more metadata from the weather API.
- Default to current location (if available) for weather data (detect closest
  city/town).
- Choose between Metric or Imperial units.
- Save and show multiple cities or areas.

### Bugs to Fix

- Fix the min/max temp bug.
- Fix the forecast bug (it's not actually 7 days shown, but 7 3-hour periods).
- Fix the search, only shows 5 options and does not get next page or beyond.
