import "../styles/ProductCard.css";

function ProductCard(props) {
  const title = props.title;
  const description = props.description;
  const price = props.price;
  const foodImage = props.foodImage;
  const foodImageAlt = props.foodImageAlt;


  return (
    <div className="ProductCard">
      <div className="ProductCard-content">
        <div className="ProductCard-item">
          <h3 className="ProductCard-title">{title}</h3>
          <p className="ProductCard-description">{description}</p>
          <p className="ProductCard-price">{price}</p>
        </div>
        <div className="ProductCard-image">
          <img src={foodImage} alt={foodImageAlt} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
