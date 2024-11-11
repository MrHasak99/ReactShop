import React from "react";
import { product } from "../products";
const ProductItem = () => {
  return (
    <div>
      <img
        className="product-image"
        src={product[0].image}
        alt={product[0].name}
      ></img>
      <h3>{product[0].name}</h3>
      <h5>{product[0].price}</h5>
    </div>
  );
};

export default ProductItem;
