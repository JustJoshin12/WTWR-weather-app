import "../WeatherCard/WeatherCard.css";
import { useContext } from "react";
import { weatherOptions } from "../../utils/constant";
import  CurrentTemperatureUnitContext  from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ day, type, weatherTemp = "" }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOption = weatherOptions.find(
    (i) => i.day === day && i.type === type
  );

  const imageSrcUrl = weatherOption?.url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp}° {currentTemperatureUnit}
      </div>

      <img
        src={imageSrcUrl}
        alt="image of current weather"
        className="weather__image"
      />
    </section>
  );
}

export default WeatherCard;
