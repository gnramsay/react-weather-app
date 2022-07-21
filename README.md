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

- removed all API keys from code and placed into a `.env` file.

## Plans

- responsive design.
- add Dark/Light mode.
- fix the min/max temp bug.
- fix the forecast bug (it's not actually 7 days shown, but 7 3-hour periods).
- change CSS to use css-modules, and rewrite as SCSS.
- pull more metadata from the weather API.
- default to current location (if available) for weather data.
- fix the search, only shows 5 options and does not get next page or beyond.
- choose between Metric or Imperial units.
- save and show multiple cities or areas.
