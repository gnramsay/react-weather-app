export const geoApiOptions = {
  method: "GET",
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo/",
  params: {
    limit: "10",
    // countryIds: "gb",
    sort: "-population",
    namePrefix: "",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
