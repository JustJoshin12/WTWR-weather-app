import Header from "../Header/Header";
import WeatherCard from '../weatherCard/weatherCard';
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <WeatherCard day={true} type="cloudy"/>
        <section id="card-section">Card Section</section>
      </main>
    </>
  );
}

export default App;
