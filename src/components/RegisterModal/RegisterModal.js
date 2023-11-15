import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const RegisterModal = ({
  onClose,
  isOpen,
  setActiveModal,
  handleRegistration,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleRegistration(email, password, name, avatar);
  };

  const onClickLogin = () => {
    setActiveModal("login");
  };

  return (
    <ModalWithForm
      title="Sign up"
      onClose={onClose}
      isOpen={isOpen}
      buttonText="Next"
      onSubmit={handleSubmit}
    >
        <label>
          <p className="modal__input-title">Email*</p>
          <input
            className="modal__input"
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={handleEmailChange}
            value={email}
          />
        </label>
        <label>
          <p className="modal__input-title">Password*</p>
          <input
            className="modal__input"
            type="text"
            placeholder="Password"
            name="password"
            required
            onChange={handlePasswordChange}
            value={password}
          />
        </label>
        <label>
          <p className="modal__input-title">Name</p>
          <input
            className="modal__input"
            type="name"
            placeholder="Name"
            name="name"
            required
            onChange={handleNameChange}
            value={name}
          />
        </label>
        <label>
          <p className="modal__input-title">Avatar URL</p>
          <input
            className="modal__input"
            type="url"
            placeholder="Avatar URL"
            name="url"
            required
            onChange={handleAvatarChange}
            value={avatar}
          />
        </label>
        <div className="modal__button-container">
          <button className="modal__submit-button-login" onClick={onClickLogin}>or Login</button>
        </div>
    </ModalWithForm>
  );
};


export default RegisterModal;