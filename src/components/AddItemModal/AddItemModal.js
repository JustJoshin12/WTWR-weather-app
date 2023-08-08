import "../AddItemModal/AddItemModal.css";

function AddItemModal() {
  return (
    <div className="modal__form-contents">
      <label>
        <p className="modal__input-title">Name</p>
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
        />
      </label>
      <label>
        <p className="modal__input-title">Image</p>
        <input
          className="modal__input"
          type="url"
          name="link"
          minLength="1"
          maxLength="30"
          placeholder="Image URL"
        />
      </label>
      <p className="modal__weather-section">Select the weather type:</p>
      <div className="modal__radio-options">
        <div className="modal__radio-option">
          <input
            className="modal__radio-button"
            name="weatherType"
            type="radio"
            id="hot"
            value="hot"
          />
          <label className="modal__weather-type"> Hot</label>
        </div>
        <div className="modal__radio-option">
          <input
            className="modal__radio-button"
            name="weatherType"
            type="radio"
            id="warm"
            value="warm"
          />
          <label className="modal__weather-type"> Warm </label>
        </div>
        <div className="modal__radio-option">
          <input
            className="modal__radio-button"
            name="weatherType"
            type="radio"
            id="cold"
            value="cold"
          />
          <label className="modal__weather-type"> Cold </label>
        </div>
      </div>
    </div>
  );
}

export default AddItemModal;
