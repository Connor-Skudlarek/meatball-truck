import React, { useState } from "react";
import "../styles/ProductForm.css"
function ProductForm() {
  const [product, setProduct] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    image: "",
    altText: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form className="ProductForm" onSubmit={handleSubmit}>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Alt Text:
        <input
          type="text"
          name="altText"
          value={product.altText}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;
