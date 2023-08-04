import "../Main/Main.css";
import WeatherCard from "../weatherCard/weatherCard";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/constant";

function Main({weatherTemp}) {
  return (
    <main className="main">
      <WeatherCard day={false} type="rain" weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        <div className="card__section__title">
          Today is {weatherTemp} / You may want to wear:
        </div>
        <div className="card__items">
          {defaultClothingItems.map((item) => {
            return <ItemCard item={item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
