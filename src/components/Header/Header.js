import "./Header.css";
import wtwrLogo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg"

function Header() {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
        <div><img src={wtwrLogo} alt="logo"/></div>
        <div>Date</div> 
        </div>
        <div className="header__avatar-logo">
        <div>
          <button type="text" >+ Add New Clothes</button>
        </div>
        <div>Joshua Smith</div>
        <div><img src={avatar} alt="avatar logo"/></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
