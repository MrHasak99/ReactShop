import React from "react";

const ProductItem = (props) => {
  return (
    <div>
      <img
        className="product-image"
        src={props.myproduct.image}
        alt={props.myproduct.name}
      ></img>
      <h3>{props.myproduct.name}</h3>
      <h5>{props.myproduct.price}</h5>
    </div>
  );
};

export default ProductItem;
