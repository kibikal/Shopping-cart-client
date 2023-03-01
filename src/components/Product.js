import React from "react";
import AddToCartButton from "./AddToCartButton";

function Product(props) {
  

  return (
    <div className="product-container" onClick={props.showDetails}>
      <img src={props.image} alt={props.name} />
      <h4>{props.name}</h4>
      <p>GH₵{props.price}</p>
      <AddToCartButton onClick = {props.onClick}>Add to cart</AddToCartButton>
    </div>
  );
}

export default Product;
