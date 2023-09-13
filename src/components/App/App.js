//                 Imports

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getForecastWeather } from "../../utils/WeatherAPI/WeatherAPI";
import { parseWeatherData } from "../../utils/WeatherAPI/WeatherAPI";
import { parseWeatherConditon } from "../../utils/WeatherAPI/WeatherAPI";
import { timeOfDayData } from "../../utils/WeatherAPI/WeatherAPI";
import { parseWeatherLocation } from "../../utils/WeatherAPI/WeatherAPI";
import "./App.css";
import { useState, useEffect, useMemo } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import { defaultClothingItems } from "../../utils/constant";
import Profile from "../Profile/Profile";


function App() {
  // Use States
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [day, setDay] = useState(true);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  //  Use Effects

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const currentTime = Date.now();
        const weatherTimeData = timeOfDayData(data);
        if (
          currentTime > weatherTimeData.sunrise &&
          currentTime < weatherTimeData.sunset
        ) {
          setDay(true);
        } else {
          setDay(false);
        }
        console.log(parseWeatherConditon(data));
        setLocation(parseWeatherLocation(data));
        setWeatherCondition(parseWeatherConditon(data));
        setTemp(parseWeatherData(data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const weatherType = useMemo(() => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  }, []);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  console.log(filteredCards);

  // Setter Functions

  console.log(temp);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = (values) => {
    console.log(values);
  };

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header location={location} onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              day={day}
              weatherCondition={weatherCondition}
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              filteredCards={filteredCards}
            />
          </Route>
          <Route path="/profile">
           <Profile filteredCards={filteredCards} onSelectCard={handleSelectedCard}/>
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            onClose={handleCloseModal}
            onAddItem={onAddItem}
            isOpen={activeModal === "create"}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
