import React, { useState, useEffect } from "react";
import ProductWrapper from "../components/ProductWrapper";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner.jsx";
import "../styles/MenuPage.css";
function MenuPage() {
  const [menuData, setMenuData] = useState([]);

  const categoryOrder = [
    "Specials",
    "Appetizers & Salads",
    "The Balls",
    "Stuffed Garlic Bread Cones",
    "Classic Italian Pasta Dishes",
    "Dessert",
    "Drinks",
    "Other Items",
  ];

  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((data) => setMenuData(data));
  }, []);

  return (
    <div className="MenuPage">
      <Banner />
      {categoryOrder.map((category) => (
        <div key={category}>
          <p className="MenuPage-category">{category}</p>
          <ProductWrapper>
            {menuData[category]?.map((item) => (
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
      ))}
    </div>
  );
}

export default MenuPage;
