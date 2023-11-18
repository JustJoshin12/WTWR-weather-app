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
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom/cjs/react-router-dom";
import Profile from "../Profile/Profile";
import {
  addItems,
  getItems,
  deleteItem,
  editUserProfile,
  removeCardLike,
  addCardLike,
} from "../../utils/api";
import { checkToken, register, signin } from "../../utils/auth";
import UserDataContext from "../../contexts/userDataContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

const App = () => {
  const history = useHistory();

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
  const [currentUser, setCurrentUser] = useState({});

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

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
        })
        .catch(() => console.error);
    } else {
      localStorage.removeItem("jwt");
      setLoggedIn(false);
      console.log("Token not Found");
    }
  }, [loggedIn, history]);

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
    addItems(values)
      .then((data) => {
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
        setCurrentUser(res);
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
    signin(email, password).then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);

        checkToken(data.token)
          .then((res) => {
            setLoggedIn(true);
            setCurrentUser(res);
            handleCloseModal();
            history.push("/profile");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return;
      }
    });
  };


  const handleUpdate = ({name,avatar}) => {
   
    console.log({name,avatar})
    editUserProfile({name,avatar})
      .then((res) => {
        setCurrentUser(res);
        handleCloseModal();
      })
      .catch((err) => {console.log(err)});
  };


  const handleLikeClick = ({ id, isLiked, user }) => {
    const token = localStorage.getItem("jwt");
    
    isLiked
      ? removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((clothingItems) =>
              clothingItems.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((clothingItems) =>
              clothingItems.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
  };

  

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <UserDataContext.Provider value={currentUser}>
        <div>
          <Header
            location={location}
            onCreateModal={handleCreateModal}
            onSignupModal={handleRegistrationModal}
            onLoginModal={handleLoginModal}
            loggedIn={loggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                day={day}
                weatherCondition={weatherCondition}
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                loggedIn={loggedIn}
                onCardLike={handleLikeClick}
                parsedCards={filteredCards}
              />
            </Route>
            <ProtectedRoute path="/profile">
              <Profile
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                clothingItems={clothingItems}
                handleLikeClick={handleLikeClick}
                onEditModal={handleEditModal}
                logout={handleLogOut}
                loggedIn={loggedIn}
                selectedCard={selectedCard}
              />
            </ProtectedRoute>
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
              currentUser={currentUser}
              loggedIn={loggedIn}
            />
          )}
          {activeModal === "signup" && (
            <RegisterModal
              onClose={handleCloseModal}
              isOpen={activeModal === "create"}
              handleRegistration={handleRegistration}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onClose={handleCloseModal}
              isOpen={activeModal === "login"}
              handleLogin={handleLogin}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal === "update" && (
            <EditProfileModal
              onClose={handleCloseModal}
              isOpen={activeModal === "update"}
              onSubmit={handleUpdate}
              currentUser={currentUser}
            />
          )}
        </div>
      </UserDataContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
};

export default App;
