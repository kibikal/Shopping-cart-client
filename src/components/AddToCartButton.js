import React from "react";

function AddToCartButton(props) {
  return <button className="add-to-cart-button" onClick={props.onClick}>Add to cart</button>;
}

export default AddToCartButton;
