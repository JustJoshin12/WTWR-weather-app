import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  filteredCards,
  onSelectCard,
  day,
  weatherCondition,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit];
  const tempUnit = { currentTemperatureUnit }.currentTemperatureUnit;

  return (
    <main className="main">
      <WeatherCard
        day={day}
        type={weatherCondition}
        weatherTemp={temp}
        tempUnit={tempUnit}
      />
      <section className="card__section" id="card-section">
        <div className="card__section__title">
          Today is {temp}° {tempUnit} / You may want to wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                item={item}
                key={item._id}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
