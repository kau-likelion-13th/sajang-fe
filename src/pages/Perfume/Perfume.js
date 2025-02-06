import React from "react";
import Banner from "../../components/Banner";
import ProductCard from "../../components/ProductCard";
import "../../styles/Perfume.css";

const Perfume = () => {
  const products = [
    {
      id: 1,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: "297,000 원",
      imagePath: "/img/perfume_1.png",
      isNew: false,
    },
    {
      id: 2,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: "297,000 원",
      imagePath: "/img/perfume_2.png",
      isNew: false,
    },
    {
      id: 3,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: "297,000 원",
      imagePath: "/img/perfume_3.png",
      isNew: false,
    },
    {
      id: 4,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: "297,000 원",
      imagePath: "/img/perfume_4.png",
      isNew: false,
    },
    {
      id: 5,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: "297,000 원",
      imagePath: "/img/perfume_5.png",
      isNew: false,
    },
  ];

  return (
    <div>
      <Banner title="Perfume" imagePath={"/banner_perfume.png"} />
      <div className="product-container">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfume;
