import React from "react";
import "./ProductCard.css";

function ProductCard({ title, price, isAvailable, discount, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p className="price">₹{price}</p>

      {/* Conditional Rendering */}
      {isAvailable ? (
        <p className="available">✅ In Stock</p>
      ) : (
        <p className="out-of-stock">❌ Out of Stock</p>
      )}

      {/* Discount (if provided) */}
      {discount && <p className="discount">Discount: {discount}% OFF</p>}
    </div>
  );
}

// ✅ Default Props (if discount not provided)
ProductCard.defaultProps = {
  discount: 0
};

export default ProductCard;
