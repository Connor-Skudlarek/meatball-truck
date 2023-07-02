import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
// import AllergensPage from './AllergensPage.jsx';
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        {/* <Route path="/allergens" element={<AllergensPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
