
import "../ModalWithForm/ModalWithForm.css";

function ModalWithForm({ children, buttonText = "Add garment", title, onClose, name }) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close-button"></button>
        <h3 className="modal__header">{title}</h3>
        <form>{children}</form>
        <button type="submit" className="modal__submit-button"> {buttonText} </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
