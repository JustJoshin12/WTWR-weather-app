import "./Header.css";
import wtwrLogo from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import  UserDataContext  from "../../contexts/userDataContext";
import { useContext } from "react";

function Header({ onCreateModal, location, loggedIn, onSignupModal, onLoginModal }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(UserDataContext);
  const avatar = currentUser ? currentUser.avatar : undefined;
  const showAvatar = avatar !== "" ? true : false;
  const name = currentUser ? currentUser.name : "";

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={wtwrLogo} alt="logo" />
        </Link>
        <div className="header__date">
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {loggedIn ? (
          <>
            <div>
              <button
                className="header__add-button"
                type="text"
                onClick={onCreateModal}
              >
                + New Clothes
              </button>
            </div>
            <Link to="/profile" className="header__username" >{currentUser.name}</Link>
            <div>
              {showAvatar ? (
                <img className="header__avatar" src={avatar} alt="avatar" />
              ) : (
                <p className="header___avatar-placeholder">{name[0]?.toUpperCase()}</p>
              )}
            </div>
          </>
        ) : (
          <>
            {" "}
            <button
              className="header__nav-button"
              type="text"
              onClick={onSignupModal}
            >
              Sign Up
            </button>
            <button
              className="header__nav-button"
              type="text"
              onClick={onLoginModal}
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
