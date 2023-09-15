import "../WeatherCard/WeatherCard.css";
import { weatherOptions } from "../../utils/constant";

function WeatherCard({ day, type, weatherTemp = "", tempUnit }) {
  const weatherOption = weatherOptions.find(
    (i) => i.day === day && i.type === type
  );
  
  

  const imageSrcUrl = weatherOption?.url || "";
 
  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}° {tempUnit}</div>

      <img
        src={imageSrcUrl}
        alt="image of current weather"
        className="weather__image"
      />
    </section>
  );
}

export default WeatherCard;
