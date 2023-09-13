import "../SideBar/SideBar.css";
import avatar from "../../../images/avatar.svg"

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <img src={avatar} alt="avatar logo" className="sidebar__avatar-image" />
      </div>
      <div className="sidebar__avatar-name">Joshua Smith</div>
    </div>
  );
};


export default SideBar