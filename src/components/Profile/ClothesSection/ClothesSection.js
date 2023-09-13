import "../ClothesSection/ClothesSection.css"
import ItemCard from "../../ItemCard/ItemCard"

const ClothesSection = ({filteredCards, onSelectCard}) => {
    return (
        <div className="clothes-section">
        <div className="clothes-section__title">
          <h3> Your Items </h3>
          <button className="clothes-section__button" type="text">
            +Add New
          </button>
        </div>
        <div className="clothes-section__card">
          {filteredCards.map((item) => (
            <ItemCard
              item={item}
              onSelectCard={onSelectCard}
              key={item.id}
            />
          ))}
        </div>
      </div>
    )
}

export default ClothesSection