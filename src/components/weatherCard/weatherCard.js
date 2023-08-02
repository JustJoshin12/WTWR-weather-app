import "../weatherCard/weatherCard.css";

const weatherOptions = [
  { url: require("../../images/day/sunny.svg").default, day: true , type: "sunny"},
  { url: require("../../images/day/cloudy.svg").default, day: true , type: "cloudy"},
  { url: require("../../images/night/cloud.svg").default, day: false , type: "cloud"},
  { url: require("../../images/night/moon.svg").default, day: false , type: "moon"},
];

function WeatherCard({day, type}) {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">75°F</div>

      <img
        src={imageSrcUrl}
        alt="image of current weather"
        className="weather__image"
      />
    </section>
  );
}

export default WeatherCard;
