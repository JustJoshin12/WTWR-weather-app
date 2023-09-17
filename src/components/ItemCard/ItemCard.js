import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__item">
      <h2 className="card__name">{item.name}</h2>
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
