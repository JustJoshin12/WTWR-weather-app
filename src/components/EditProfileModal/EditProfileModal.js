import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const EditProfileModal = ({ onClose, isOpen, onSubmit, currentUser }) => {

    const [name, setName] = useState(currentUser.name);
    const [avatar, setAvatar] = useState(currentUser.avatar);

    const handleNameChange = (e) => {
       setName(e.target.value);
    };

    const handleAvatarChange = (e) => {
      setAvatar(e.target.value);
    };

    const handleSubmit = (e) => {
       e.preventDefault();

       onSubmit( {name, avatar});
    }



  return (
    <ModalWithForm
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Save Changes"
      title="Change profile data"
    >
      <label>
        <p className="modal__input-title">Name</p>
        <input
          className="modal__input"
          type="text"
          placeholder={currentUser.name}
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        <p className="modal__input-title">Avatar</p>
        <input
          className="modal__input"
          type="url"
          name="avatar"
          placeholder={currentUser.avatar}
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
