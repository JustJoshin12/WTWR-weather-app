import "../ItemModal/ItemModal.css";

function ItemModal({ selectedCard, onClose, handleDeleteCard }) {
  return (
    <div className={`modal`}>
      <div className="modal__item-content">
        <button
          className="modal__item-close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__item-photo"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__item-info">
          <p className="modal__item-name">{selectedCard.name}</p>
          <div className="modal__item-weatherType">
            Weather: {selectedCard.weather}
          </div>
          <button
            className="modal__item-delete-button"
            type=" button"
            onClick={() => handleDeleteCard(selectedCard)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
