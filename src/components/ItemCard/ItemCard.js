import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <>
      <div className="card__item">
        <h2 className="card__name">{item.name}</h2>
        <img
          alt = "Photo of clothing item"
          className="card__image"
          src={item.link}
          onClick={() => onSelectCard(item)}
        />
      </div>
    </>
  );
};

export default ItemCard;
