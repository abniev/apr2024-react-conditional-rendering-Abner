// src/components/ImprovedMovieList.jsx

import { useState } from "react";
import productData from "../data.json";
import ImprovedProductCard from "./ImprovedProductCard";

function ImprovedProductList() {
  const [product, setProduct] = useState(productData);
  // Declare a new state variable, which we'll call "showMovies"
  const [showProduct, setShowProduct] = useState(true);

  const deleteProduct = (productId) => {
    const filteredProduct = product.filter((product) => {
      return product.id !== productId;
    });

    setProduct(filteredProduct);
  };

  const toggleShowProduct = () => {
    setShowProduct(!showProduct);
  };

  return (
    <div>
      <h2>Product List</h2>

      <button onClick={toggleShowProduct}>{showProduct ? "Hide" : "Show"}</button>

      {showProduct &&
        product.map((product) => {
          return (
            <ImprovedProductCard
              key={product.id}
              product={product}
              clickToDelete={deleteProduct}
            />
          );
        })}
    </div>
  );
}

export default ImprovedProductList;
