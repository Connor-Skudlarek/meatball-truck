import "../styles/LandingPage.css";
import Banner from "../components/Banner.jsx";
import LocationInfo from "../components/LocationInfo.jsx";
import Footer from "../components/Footer.jsx";

function LandingPage() {
  return (
    <div className="LandingPage">
      <Banner />
      <LocationInfo />
      <Footer />
    </div>
  );
}

export default LandingPage;
