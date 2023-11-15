import "../ItemModal/ItemModal.css";

function ItemModal({
  selectedCard,
  onClose,
  handleDeleteCard,
  loggedIn,
  currentUser,
}) {
  const isOwn = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

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
          {loggedIn && isOwn ? (
            <button
              className={itemDeleteButtonClassName}
              type=" button"
              onClick={() => handleDeleteCard(selectedCard)}
            >
              Delete Item
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
