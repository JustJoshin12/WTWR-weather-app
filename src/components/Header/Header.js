import "./Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
        <div><img src='/images/logo.svg' alt="logo"/></div>
        <div>Date</div> 
        </div>
        <div className="header__avatar-logo">
        <div>
          <button type="text" >+ Add New Clothes</button>
        </div>
        <div>Joshua Smith</div>
        <div><img src='/images/avatar.svg' alt="avatar logo"/></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
