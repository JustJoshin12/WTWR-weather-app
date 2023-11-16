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
    onCardLike({ _id: cardId, isLiked: isLiked, user: userId });
  };

  return (
    <div className="card__item">
      <h2 className="card__name">{item.name}</h2>
      <img
        alt={item.name}
        className="card__image"
        src={item.link}
        onClick={() => onSelectCard(item)}
      />
      <button
        className={likeButtonClassName}
        type="button"
        onClick={handleLikeClick}
      ></button>
    </div>
  );
};

export default ItemCard;
