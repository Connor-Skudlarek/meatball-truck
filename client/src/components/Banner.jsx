import "../styles/Banner.css";

function Banner() {
  function handleClick(e) {
    e.preventDefault();
    alert("Button does not do anything yet");
  }
  return (
    <div className="Banner">
      <div className="Banner-container">
        <div className="Banner-header">
          <a href="/">
            <img
              className="Banner-company-brand"
              src="https://www.gotballstruck.com/uploads/b/591650a4acb63f8929f3844396fb9a9c615fe5fdfdb7107a9beb931b4a1478f7/5909AA5A-CCA4-46C7-932C-C8F0E8F1F5FA_1660787505.JPEG?width=400&optimize=medium"
              alt="Company brand in whtie text on black background, saying: 'Got Balls? Meatball Truck'"
            ></img>
          </a>
          <div className="Banner-navbar"></div>
        </div>
        <div className="Banner-fulfillment">
          <p className="Banner-pickup-delivery-info" onClick={handleClick}>
            Pickup from 325 S Riverside Ave<br></br>Tuesday at 12:00pm
          </p>
          <a href="/menu">
            <button>Menu</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
