import "../WeatherCard/WeatherCard.css";
import { weatherOptions } from "../../utils/constant";

function WeatherCard({ day, type, weatherTemp = "", tempUnit }) {
  console.log(day + ' ' + type)
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  console.log(imageSrc)


  const imageSrcUrl = weatherOptions[0].url || "";
 
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
