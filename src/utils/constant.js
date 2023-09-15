import daySunny from "../images/day/sunny.svg";
import dayCloudy from "../images/day/cloudy.svg";
import dayFog from "../images/day/fog.svg";
import dayRain from "../images/day/rain.svg";
import daySnow from "../images/day/snow.svg";
import dayStorm from "../images/day/storm.svg";
import nightCloudy from "../images/night/cloudy.svg";
import nightFog from "../images/night/fog.svg";
import nightMoon from "../images/night/moon.svg";
import nightRain from "../images/night/rain.svg";
import nightSnow from "../images/night/snow.svg";
import nightStorm from "../images/night/storm.svg";


export const weatherOptions = [
  {
    url: daySunny,
    day: true,
    type: "sunny",
  },
  {
    url: daySunny,
    day: true,
    type: "clear",
  },
  {
    url: dayCloudy,
    day: true,
    type: "clouds",
  },
  {
    url: dayFog,
    day: true,
    type: "fog",
  },
  {
    url: dayRain,
    day: true,
    type: "rain",
  },
  {
    url: daySnow,
    day: true,
    type: "snow",
  },
  {
    url: dayStorm,
    day: true,
    type: "thunderstorm",
  },
  {
    url: nightFog,
    day: false,
    type: "fog",
  },
  {
    url: nightRain,
    day: false,
    type: "rain",
  },
  {
    url: nightSnow,
    day: false,
    type: "snow",
  },
  {
    url: nightStorm,
    day: false,
    type: "thunderstorm",
  },
  {
    url: nightCloudy,
    day: false,
    type: "clouds",
  },
  {
    url: nightMoon,
    day: false,
    type: "clear",
  },
];
