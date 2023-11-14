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
import { useState, useEffect, useMemo } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom/cjs/react-router-dom";
import Profile from "../Profile/Profile";
import { addItems, getItems, deleteItem, editUserProfile } from "../../utils/api";
import { register } from "../../utils/auth";

function App() {
  const history = useHistory();
  const appContextValue = { state: { loggedIn, userData } };

  // Use States
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [day, setDay] = useState(true);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  //  Use Effects

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        console.log(data);
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

  const filteredCards = clothingItems.filter((item) => {
    return item.weather === weatherType;
  });

  // Setter Functions

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

  const handleRegistrationModal = () => {
    setActiveModal("signup");
  };

  const handleEditModal = () => {
    setActiveModal("update");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/");
  };

  const onAddItem = (values) => {
    console.log(values);
    addItems(values)
      .then((data) => {
        console.log(data);
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error.status);
      });
  };

  const onDeleteCard = (selectedCard) => {
    deleteItem(selectedCard)
      .then(() => {
        const newClothingItems = clothingItems.filter((cards) => {
          return cards._id !== selectedCard._id;
        });
        setClothingItems(newClothingItems);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error.status);
      });
  };

  const handleRegistration = (name, email, password, avatar) => {
    register(name, email, password, avatar)
      .then((res) => {
        setLoggedIn(true);
        setUserData(res.data);
        handleCloseModal();
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoggedIn(false);
      });
  };

  const handleLogin = (email, password) => {
    signin(email, password)
      .then((res) => {
        return res;
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem;
        }
      });
  };

  const handleUpdate = (data) => {
    editUserProfile(data)
    .then((res) => {
      setUserData(res.data);
      handleCloseModal();
    })
    .catch((err) => console.error(err))
  }

  return (
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
          <Profile
            filteredCards={filteredCards}
            onSelectCard={handleSelectedCard}
            onCreateModal={handleCreateModal}
          />
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
        <ItemModal
          selectedCard={selectedCard}
          onClose={handleCloseModal}
          handleDeleteCard={onDeleteCard}
        />
      )}
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
