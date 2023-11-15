import "../ClothesSection/ClothesSection.css";
import ItemCard from "../../ItemCard/ItemCard";
import  userDataContext  from "../../../contexts/userDataContext";
import { useContext } from "react";

const ClothesSection = ({
  onSelectCard,
  onCreateModal,
  selectedCard,
  setSelectedCard,
  loggedIn,
  onCardLike,
  clothingItems,
}) => {
  const currentUser = useContext(userDataContext);

  const filteredCards = clothingItems.filter((item) => {
    const isOwn = item.owner === currentUser?._id;
    return isOwn;
  });

  const selectCard = (card) => {
    setSelectedCard(card)
  };

  return (
    <div className="clothes-section">
      <div className="clothes-section__title">
        <h3> Your Items </h3>
        <button
          className="clothes-section__button"
          type="text"
          onClick={onCreateModal}
        >
          +Add New
        </button>
      </div>
      <div className="clothes-section__card">
        {filteredCards.map((item) => (
          <ItemCard
            item={item}
            onSelectCard={onSelectCard}
            key={item._id}
            onCardLike={onCardLike}
            selectedCard={selectedCard}
            onClick={() => {
              selectCard(item);
            }}
            loggedIn={loggedIn}
          />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;
