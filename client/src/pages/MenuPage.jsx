import React, { useState, useEffect } from "react";
import ProductWrapper from "../components/ProductWrapper";
import ProductCard from "../components/ProductCard";
import "../styles/MenuPage.css";
function MenuPage() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((data) => setMenuData(data));
  }, []);

  return (
    <div className="MenuPage">
      <p>Appetizers & Salads</p>
      <ProductWrapper>
        {menuData.map((item) => (
          <ProductCard
            key={item.title}
            title={item.title}
            description={item.description}
            price={`$${item.price.toFixed(2)}`}
            foodImage={item.image}
            foodImageAlt={item.altText}
          />
        ))}
      </ProductWrapper>
    </div>
  );
}

export default MenuPage;
