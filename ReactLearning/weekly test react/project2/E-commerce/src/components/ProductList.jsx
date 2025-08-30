import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
const products = [
  {
    title: "Portable Bluetooth Speaker",
    price: 1999,
    isAvailable: true,
    discount: 10,
    image: "https://tse2.mm.bing.net/th/id/OIP.rNxkdzB6EsyKwx3tG_OZvAHaHa?pid=Api&P=0&h=180"
  },
  {
    title: "Wireless Bluetooth Speaker",
    price: 2499,
    isAvailable: true,
    discount: 15,
    image: "https://i5.walmartimages.com/asr/5c462825-76ea-4776-8265-bd743590a8ca.5ae3c55c65970f584371f215042688b0.jpeg"
  },
  {
    title: "RGB Gaming Mouse",
    price: 1599,
    isAvailable: true,
    image: "https://images-na.ssl-images-amazon.com/images/I/61QXVSF6bLL._AC_SL1500_.jpg"
  },
  {
    title: "ROG Gaming Mouse",
    price: 2499,
    isAvailable: false,
    image: "https://s.yimg.com/ny/api/res/1.2/B7eN8sghJVgOwaiG0Kh0sA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://media.zenfs.com/en/pc_gamer_708/34aed0c8b99fc4e0c002ddc2039ac5c8."
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
