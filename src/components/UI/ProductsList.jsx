import React from "react";
import ProductsCard from "./ProductsCard";
import '../../styles/productList.css'

const ProductsList = () => {
  return (
    <div className="containerRow">
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
    </div>
  );
};

export default ProductsList;
