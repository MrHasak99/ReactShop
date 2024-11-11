import React from "react";
import { products } from "../products";
import ProductItem from "./ProductItem";

const ProductList = () =>
  products.map(function (product) {
    return <ProductItem myproduct={product} />;
  });
export default ProductList;
