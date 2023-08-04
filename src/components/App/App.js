import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./App.css";
import { useState } from "react";

function App() {
  const weatherTemp = "75° F";

  const [activeModal, setActiveModal] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <div className="modal__form-contents">
            <label>
              <p className="modal__input-title">Name</p>
              <input className="modal__input" type="text" name="name" minLength="1" maxLength="30" placeholder="Name"/>
            </label>
            <label>
              <p className="modal__input-title">Image</p>
              <input className="modal__input" type="url" name="link" minLength="1" maxLength="30" placeholder="Image URL"/>
            </label>
            <p className="modal__weather-section">Select the weather type:</p>
            <div className="modal__weather-options">
              <div>
                <input type="radio" id="hot" value="hot" />
                <label className="modal__weather-type"> Hot </label>
              </div>
              <div>
                <input type="radio" id="warm" value="warm" />
                <label className="modal__weather-type"> Warm </label>
              </div>
              <div>
                <input type="radio" id="cold" value="cold" />
                <label className="modal__weather-type"> Cold </label>
              </div>
            </div>
          </div>
        </ModalWithForm>
      )}
    </div>
  );
}

export default App;
