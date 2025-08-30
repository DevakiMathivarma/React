import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
const products = [
  {
    title: "Portable Bluetooth Speaker",
    price: 1999,
    isAvailable: true,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/61+9T8cIu-L._AC_SL1500_.jpg" // Sony-style headphones
  },
  {
    title: "RGB Bluetooth Speaker",
    price: 2499,
    isAvailable: true,
    discount: 15,
    image: "https://images.unsplash.com/photo-1599058917215-b5998d9bc7f0" // Use your own hosted image or placeholder
  },
  {
    title: "Bluetooth Speaker (ulti-color)",
    price: 2999,
    isAvailable: true,
    discount: 20,
    image: "https://via.placeholder.com/220x220" // placeholder if needed
  },
  {
    title: "Honeycomb Gaming Mouse",
    price: 1599,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1601324370776-d5230b6c5dfd" // Replace with turn0image1 url
  },
  {
    title: "RGB Wired Gaming Mouse",
    price: 1199,
    isAvailable: false,
    image: "https://images.unsplash.com/photo-1570811324266-9c23c9e081f6" // Replace with turn0image3 url
  }
];

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>🛒 Product Listing</h2>
      <div className="product-list">
        {products.map((p, index) => (
          <ProductCard key={index} {...p} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
