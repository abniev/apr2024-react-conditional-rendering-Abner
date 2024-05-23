// src/components/MovieList.jsx

import { useState } from "react";
import productData from "../data.json";

// import MovieCard from "./MovieCard";
import ImprovedProductCard from "./ImprovedProductCard";

function ProductList() {
  const [product, setProduct] = useState(productData);

  const deleteProduct = (productId) => {
    const filteredProducts = product.filter((product) => {
      return product.id !== productId;
    });

    setProduct(filteredProducts);
  };

  return (
    <div>
      <h2>Product List</h2>
      {product.map((product) => {
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

export default ProductList;
