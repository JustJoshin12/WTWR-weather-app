import "./Header.css";
import wtwrLogo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg"

function Header() {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
        <div><img src={wtwrLogo} alt="logo"/></div>
        <div className="header__date">June 15, New York</div> 
        </div>
        <div className="header__avatar-logo">
        <div>
          <button type="text" className="header__button">+ Add clothes</button>
        </div>
        <div className="header__avatar-name">Joshua Smith</div>
        <div><img src={avatar} alt="avatar logo"/></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
