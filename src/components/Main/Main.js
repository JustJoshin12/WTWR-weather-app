import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

import { useContext } from "react";
import  CurrentTemperatureUnitContext  from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  parsedCards,
  onSelectCard,
  day,
  weatherCondition,
  onCardLike,
  loggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit];
  

  return (
    <main className="main">
      <WeatherCard day={day} type={weatherCondition} weatherTemp={temp} />
      <section className="card__section" id="card-section">
        <div className="card__section__title">
          Today is {temp}° {currentTemperatureUnit} / You may want to wear:
        </div>
        <div className="card__items">
          {parsedCards.map((item) => {
            return (
              <ItemCard
                item={item}
                key={item._id}
                onSelectCard={onSelectCard}
                loggedIn={loggedIn}
                onCardLike={onCardLike}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
