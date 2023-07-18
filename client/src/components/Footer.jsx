import "../styles/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div clssName="Footer-brand">
          <p>
            Got Balls Meatball Truck<br></br>Pickup & Delivery
          </p>
          <p>Order Now</p>
        </div>
        <div className="Footer-extra-services">
          <p>
            Large Order?<br></br>Don't want to order online?<br></br>Give us a
            call at: 541-531-8088
          </p>
        </div>
        <hr></hr>
        <div className="Footer-socials">
          <a target="_blank" href="sgbtruck@gmail.com">
            <img
              src="https://icons-for-free.com/iconfiles/png/512/email+gmail+mail+service+mailing+online+service+icon-1320194987766966945.png"
              alt="The gmail icon"
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/gotballsmeatballtruck"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
              alt="The instagram icon"
            />
          </a>
          <p className="Footer-copyright">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
