import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import {defaultClothingItems} from "../../utils/constant";
import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { timeOfDayData } from "../../utils/WeatherAPI/WeatherAPI";
import { getForecastWeather } from "../../utils/WeatherAPI/WeatherAPI";
import { parseWeatherConditon } from "../../utils/WeatherAPI/WeatherAPI";

function Main({ weatherTemp, onSelectCard }) {
  const [day,setDay] = useState(true);
  const [weatherCondition,setWeather] = useState("sunny");

  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

function daytime () {
    getForecastWeather()
    .then((data)=>{
      const weatherTimeData = timeOfDayData(data);
      const currentTime = Date.now();
      if(currentTime > weatherTimeData.sunrise && currentTime < weatherTimeData.sunset){
        setDay(true)
      }else{
        setDay(false)
      }
    }).catch((error) => {
      console.error(error)
    })
  };

  useEffect( () => {
    getForecastWeather()
    .then((data)=>{
      const weatherCondition = parseWeatherConditon(data);
      console.log(weatherCondition)
      setWeather(weatherCondition);
    })
  })
  

  daytime();

 
  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={day} type='clouds' weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        <div className="card__section__title">
          Today is {weatherTemp}° F / You may want to wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item) => {
            return <ItemCard item={item} key={item._id} onSelectCard={onSelectCard} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
