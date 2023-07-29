import Header from "../Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="weather" id="weather">
          <div className="weather__info">75 F</div>

          <img
            src="/images/day/sunny.svg"
            alt="image of current weather"
            className="weather__image"
          />
        </section>
        <section id="card-section">Card Section</section>
      </main>
    </>
  );
}

export default App;
