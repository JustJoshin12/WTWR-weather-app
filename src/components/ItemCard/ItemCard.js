import "./ItemCard.css"

const ItemCard = ({item}) => {
    return( <div>
      <div className="card__item">
      <div className="card__name">{item.name}</div>
        <img className="card__image" src={item.link}/>
      </div>
    </div>)
  }

  export default ItemCard;

