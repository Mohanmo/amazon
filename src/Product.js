import React from "react";
import "./Product.css";
function Product({title, image, price , rating}) {
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          <span>{"⭐️".repeat(rating)}</span>
        </div>
      </div>
      <img alt="" src={image} />

        <button>Add to Cart</button>
    </div>
  );
}

export default Product;
