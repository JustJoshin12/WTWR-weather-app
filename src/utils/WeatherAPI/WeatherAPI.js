//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
//api key 9d88578d96b363adcadf5a0117ea7c43
const latitude = 44.34;
const longitude = 10.99;
const APIkey = "9d88578d96b363adcadf5a0117ea7c43";
export const GetForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

export const timeOfDayData = (data) => {
  const system = data.sys;
  const sunriseTimeInMillis = system.sunrise * 1000;
  const sunsetTimeInMillis = system.sunset * 1000;
  let time = {
    sunrise: sunriseTimeInMillis,
    sunset: sunsetTimeInMillis,
  };
  return time;
};

export const parseWeatherConditon = (data) => {
    const weatherData = data.weather;
    const currentWeatherCondition = weatherData[0].main.toLowerCase();
    return currentWeatherCondition
    
}