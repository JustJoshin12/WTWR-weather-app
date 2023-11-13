import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const LoginModal = ({ onClose, isOpen, setActiveModal, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  const onClickSignup = () => {
    setActiveModal("signup");
  };

  return (
    <ModalWithForm
      title="Log in"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Login"
    >
      <label>
        <p className="modal__input-title">Email</p>
        <input
          className="modal__input"
          type="email"
          name="email"
          required
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label>
        <p className="modal__input-title">Password</p>
        <input
          className="modal__input"
          type="text"
          name="password"
          required
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>

      <div className="modal__button-container">
        <button
          className="modal__submit-button-register"
          type="button"
          name="button"
          onClick={onClickSignup}
        >
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
