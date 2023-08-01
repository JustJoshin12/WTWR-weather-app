import "../weatherCard/weatherCard.css";

const weatherOptions = [
  { url: "../../images/day/sunny.svg", day: true , type: "sunny"},
  { url: "../../images/day/cloudy.svg", day: true , type: "cloudy"},
  { url: "../../images/night/cloud.svg", day: false , type: "cloud"},
  { url: "../../images/night/moon.svg", day: false , type: "moon"},
];

function WeatherCard({day, type}) {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">75F</div>

      <img
        src={imageSrcUrl}
        alt="image of current weather"
        className="weather__image"
      />
    </section>
  );
}

export default WeatherCard;
