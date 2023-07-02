// import React, { useState, useEffect } from "react";
import ProductWrapper from "../components/ProductWrapper";
function MenuPage() {
//   const [menuData, setMenuData] = useState([]);

//   useEffect(() => {
//     fetch("/menu")
//       .then((response) => response.json())
//       .then((data) => setMenuData(data));
//   }, []);

  return (
    // <div>{menuData.map(item => <p>{item}</p>)}</div>
    <div>
      <p>Appetizers & Salads</p>
      <ProductWrapper />
    </div>
  );
}

export default MenuPage;
