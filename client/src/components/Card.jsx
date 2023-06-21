import "../styles/Card";

function Card(props) {
  const title = props.title;
  const description = props.description;
  const price = props.price;
  const foodImage = props.foodImage;
  const foodImageAlt = props.foodImageAlt;

  return (
    <div class="Card">
      <div class="Card-content">
        <div class="Card-item">
          <h4 class="Card-title">{title}</h4>
          <p class="Card-description">{description}</p>
          <p class="Card-price">{price}</p>
        </div>
        <div class="Card-image">
          <img src={foodImage} alt={foodImageAlt} />
        </div>
      </div>
    </div>
  );
}

export default Card;
