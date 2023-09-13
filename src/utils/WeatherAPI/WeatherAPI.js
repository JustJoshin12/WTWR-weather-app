//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
//api key 9d88578d96b363adcadf5a0117ea7c43
const latitude = 41.9575;
const longitude = -88.0809;
const APIkey = "9d88578d96b363adcadf5a0117ea7c43";
export const getForecastWeather = () => {
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
  const weather = {temperature: {F: Math.round(temperature), C: Math.round((temperature - 32) * 5/9)}};
  console.log(weather);
  return weather;
};

export const timeOfDayData = (data) => {
  const system = data.sys;
  const sunriseTimeInMillis = system.sunrise * 1000;
  const sunsetTimeInMillis = system.sunset * 1000;
  const time = {
    sunrise: sunriseTimeInMillis,
    sunset: sunsetTimeInMillis,
  };
  return time;
};

export const parseWeatherConditon = (data) => {
  const weatherData = data.weather;
  const currentWeatherCondition = weatherData[0].main.toLowerCase();
  return currentWeatherCondition;
};

export const parseWeatherLocation = (data) => {
   const weatherLocation = data.name;
   return weatherLocation;
  
}

// weather.temperature.F = `${Math.round(data.main.temp)}°F`
// weather.temperature.C = `${Math.round((data.main.temp - 32) * 5/9)}°C`
