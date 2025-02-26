import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "./../../components/PayModal";

const Perfume = () => {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    axios
      .get("/categories/3/items", {
        headers: {
          accept: "*/*",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzOTM3ODI3NDg2IiwiaWF0IjoxNzQwNTcyMDI4LCJleHAiOjE3NDA1NzU2MjgsImF1dGhvcml0aWVzIjoiUk9MRV9VU0VSIn0.hcs7YKR59TNiC0qX-_gtnvpN1AKifjdJY_VSWgPTxnw",
        },
      })
      .then((response) => {
        setProducts(response.data.result);
      })
      .catch((err) => {
        console.log("API 요청 실패:", err);
      });
  }, []);

  const totatlPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Banner title="Perfume" imagePath={"/banner_perfume.png"} />
      <div className="product-container">
        <div className="product-grid">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.name,
                brand: product.brand,
                price: product.price,
                imagePath: product.thumbnail,
                isNew: false,
              }}
              onClick={() => handleCardClick(product)}
            />
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
      {isModalOpen && (
        <PayModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Perfume;
