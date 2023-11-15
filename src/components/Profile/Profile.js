import "../Profile/Profile.css";
import SideBar from "./SideBar/Sidebar";
import ClothesSection from "./ClothesSection/ClothesSection";

const Profile = ({
  onSelectCard,
  onCreateModal,
  clothingItems,
  handleLikeClick,
  onEditModal,
  logout,
  loggedIn,
  selectedCard,
}) => {
  return (
    <main className="profile">
      <SideBar handleLogout={logout} handleEditModal={onEditModal}/>
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
        onCardLike={handleLikeClick}
        loggedIn={loggedIn}
        setSelectedCard={selectedCard}
      />
    </main>
  );
};

export default Profile;
