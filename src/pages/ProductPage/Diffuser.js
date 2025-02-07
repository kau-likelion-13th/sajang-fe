import React, { useState } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";

const Diffuser = () => {
  const products = [
    {
      id: 1,
      name: "벚꽃 디퓨저",
      brand: "코코도르",
      price: "40,000 원",
      imagePath: "/img/diffuser_1.png",
      isNew: false,
    },
    {
      id: 2,
      name: "벚꽃 디퓨저",
      brand: "코코도르",
      price: "40,000 원",
      imagePath: "/img/diffuser_2.png",
      isNew: false,
    },
    {
      id: 3,
      name: "벚꽃 디퓨저",
      brand: "코코도르",
      price: "40,000 원",
      imagePath: "/img/diffuser_3.png",
      isNew: false,
    },
    {
      id: 4,
      name: "벚꽃 디퓨저",
      brand: "코코도르",
      price: "40,000 원",
      imagePath: "/img/diffuser_4.png",
      isNew: false,
    },
    {
      id: 5,
      name: "벚꽃 디퓨저",
      brand: "코코도르",
      price: "40,000 원",
      imagePath: "/img/diffuser_5.png",
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
      <Banner title="Diffuser" imagePath={"/banner_diffuser.png"} />
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

export default Diffuser;
