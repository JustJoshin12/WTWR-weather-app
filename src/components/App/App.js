//                 Imports

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import { GetForecastWeather } from "../../utils/WeatherAPI/WeatherAPI";
import { parseWeatherData } from "../../utils/WeatherAPI/WeatherAPI";
import "./App.css";
import { useState } from "react";
import { useEffect } from 'react';

function App() {
    // Use States
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

//  Use Effects

  useEffect(() => {
    GetForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    })
   }, [])

   // Setter Functions

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal('preview');
    setSelectedCard(card);
  };

  return (
    <div>
      <Header onCreateModal={handleCreateModal} /> 
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <AddItemModal/>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal}/>
      )}
    </div>
  );
}

export default App;
