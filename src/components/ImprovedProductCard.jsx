import GenerateScoreLabel from "../assets/lib/generateScoreLabel";

// src/components/ImprovedMovieCard.jsx
function ImprovedProductCard(props) {
  const { product, clickToDelete } = props;
  return (
    <div className="ProductCard">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}€</p>
      <p>{product.discountPercentage}%</p>
      <p>{product.rating} 🌟</p>
      <p>
        Stock: <GenerateScoreLabel stock={product.stock} />
      </p>
      <p>{product.brand}</p>
      <p><span >Category:</span> {product.category}</p>
      {/* <p>{product.thumbnail}</p>
      <p>{product.images}</p> */}

      <button onClick={() => clickToDelete(product.id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default ImprovedProductCard;


// {
//   "id": 1,
//   "title": "iPhone 9",
//   "description": "An apple mobile which is nothing like apple",
//   "price": 549,
//   "discountPercentage": 12.96,
//   "rating": 4.69,
//   "stock": 94,
//   "brand": "Apple",
//   "category": "smartphones",
//   "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//   "images": [
//     "https://cdn.dummyjson.com/product-images/1/1.jpg",
//     "https://cdn.dummyjson.com/product-images/1/2.jpg",
//     "https://cdn.dummyjson.com/product-images/1/3.jpg",
//     "https://cdn.dummyjson.com/product-images/1/4.jpg",
//     "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//   ]
// },