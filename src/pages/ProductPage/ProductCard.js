import React from "react";
import "../../styles/ProductPage.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {product.isNew && <div className="new-badge">New</div>}
      <img
        src={product.imagePath}
        alt={product.name}
        className="product-image"
      />
      <div className="product-name">{product.name}</div>
      <div className="product-brand">{product.brand}</div>
      <div className="product-price">{product.price}</div>
    </div>
  );
};

export default ProductCard;
