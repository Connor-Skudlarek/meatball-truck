import "../styles/LocationInfo.css";

function LocationInfo() {
  return (
    <div className="LocationInfo">
      <div className="LocationInfo-container">
        <div className="LocationInfo-maps"></div>
        <div className="LocationInfo-location-hours">
          <h2 className="LocationInfo-header">Location & Hours</h2>
          <div className="LocationInfo-business-info">
            <div className="LocationInfo-address-contact">
              <p>
                Got Balls Meatball Truck LLC<br></br>325 S Riverside Ave
                <br></br>Medford, Oregon 97504
              </p>
              <a href="tel:5415318088">(541) 531-8088</a>
              <a href="mailto:gotballstruck@gmail.com">
                gotballstruck@gmail.com
              </a>
              <p className="LocationInfo-directions">
                <a href="https://www.google.com/maps/dir/?api=1&destination=325+S+Riverside+Ave+Medford+OR+97504">
                  Get directions
                </a>
              </p>
            </div>
            <div>
              <ul className="LocationInfo-days-open">
                <li>Monday: Closed</li>
                <li>Tuesday: 11:30am - 5:00pm</li>
                <li>Wednesday: 11:30 am - 5:00 pm</li>
                <li>Thursday: 11:30 am - 5:00 pm</li>
                <li>Friday: 11:30 am - 7:00 pm</li>
                <li>Saturday: 11:30 am - 7:00 pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationInfo;