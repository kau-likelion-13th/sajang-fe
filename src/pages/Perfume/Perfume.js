import React, { useState } from "react";
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const totatlPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Banner title="Perfume" imagePath={"/banner_perfume.png"} />
      <div className="product-container">
        <div className="product-grid">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="paging">
          {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)}>
              Prev
            </button>
          )}
          {Array.from({ length: totatlPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={pageNumber === currentPage ? "active" : ""}
              >
                {pageNumber}
              </button>
            )
          )}
          {currentPage < totatlPages && (
            <button onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Perfume;
