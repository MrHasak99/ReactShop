import { products } from "../products";
import ProductItem from "./ProductItem";

const ProductList = () =>
  products.map(function (product, index) {
    return <ProductItem myproduct={product} key={index} />;
  });
export default ProductList;
