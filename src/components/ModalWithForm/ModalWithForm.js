
import "../ModalWithForm/ModalWithForm.css";

function ModalWithForm({ children, buttonText = "Add garment", title, onClose, name, isOpen, onSubmit }) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close-button"/>
        <h3 className="modal__header">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit-button"> {buttonText} </button>
          </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
