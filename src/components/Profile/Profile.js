import "../Profile/Profile.css";
import SideBar from "./SideBar/Sidebar";
import ClothesSection from "./ClothesSection/ClothesSection";

const Profile = ({filteredCards, onSelectCard}) => {
  return (
    <main className="profile">
      <SideBar/>
      <ClothesSection filteredCards={filteredCards} onSelectCard={onSelectCard}/>
    </main>
  );
};

export default Profile