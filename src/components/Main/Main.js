import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import {defaultClothingItems} from "../../utils/constant";
import { useMemo } from "react";


function Main({ weatherTemp, onSelectCard }) {
  

  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type='clouds' weatherTemp={weatherTemp} />
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
