import "../SideBar/SideBar.css";
import  userDataContext  from "../../../contexts/userDataContext";
import { useContext } from "react";

const SideBar = ({handleLogout, handleEditModal}) => {
  const currentUser = useContext(userDataContext);
  const name = currentUser ? currentUser.name : "";
  const avatar = currentUser ? currentUser.avatar : undefined;
  const showAvatar = avatar !== "" ? true : false;

  
  return (
    <div className="sidebar">
      <div className="sidebar__userInfo">
      {showAvatar ? (
          <img className="sidebar__avatar-image" src={avatar} alt="avatar" />
        ) : (
          <p className="sidebar__avatar-placeholder">{name[0]?.toUpperCase()}</p>
        )}
        <p className="sidebar__avatar-name">{currentUser.name}</p>
      </div>
      <div className="sidebar__buttons">
        <buttton className="sidebar__button-edit" onClick={handleEditModal}>Change profile data</buttton>
        <button className="sidebar__button-logout" onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
};

export default SideBar;
