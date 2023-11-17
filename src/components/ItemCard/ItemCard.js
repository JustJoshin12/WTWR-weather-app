import "./ItemCard.css";
import { useContext } from "react";
import userDataContext from "../../contexts/userDataContext";

const ItemCard = ({
  item,
  onSelectCard,
  onCardLike,
}) => {
  const currentUser = useContext(userDataContext);

  const cardId = item._id;
  const userId = currentUser ? currentUser._id : "";
  const isLiked = item.likes.some((id) => id === userId);
  const likeButtonClassName = isLiked
    ? "card__like-button card__like-button-active"
    : "card__like-button ";

  const handleLikeClick = () => {
    onCardLike({ id: cardId, isLiked: isLiked, user: userId });
  };

  return (
    <div className="card__item">
      <div className="card__info">
        <h2 className="card__name">{item.name}</h2>
        <button
          className={likeButtonClassName}
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
      <img
        alt={item.name}
        className="card__image"
        src={item.imageUrl}
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default ItemCard;
