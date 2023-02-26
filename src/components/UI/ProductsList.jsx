import React from "react";
import ProductsCard from "./ProductsCard";
import '../../styles/productList.css'

const ProductsList = ({data}) => {
  return (
    <div className="containerRow">

      {
        data.map(item =>(
          <ProductsCard item={item} />
        ))
      }
    </div>
  );
};

export default ProductsList;
