// src/components/MovieCard.jsx

import React from "react";

function ProductCard(props) {
  const { product, clickToDelete } = props;
  return (
    <div className="ProductCard">
      <h3>{product.title}</h3>
      <p>Director: {product.director}</p>
      <p>Rating: {product.IMDBRating}</p>
      {product.hasOscars && <p>🏆</p>}
      {/* <p>Won oscar: {product.hasOscars ? <span>🏆</span> : <span>❌</span>}</p> */}
      <button onClick={() => clickToDelete(product.id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default ProductCard;
