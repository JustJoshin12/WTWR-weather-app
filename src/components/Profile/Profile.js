import "../Profile/Profile.css";
import SideBar from "./SideBar/Sidebar";
import ClothesSection from "./ClothesSection/ClothesSection";

const Profile = ({ filteredCards, onSelectCard, onCreateModal }) => {
  return (
    <main className="profile">
      <SideBar />
      <ClothesSection
        filteredCards={filteredCards}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
      />
    </main>
  );
};

export default Profile;
