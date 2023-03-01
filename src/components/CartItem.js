import React, { useContext } from "react";
import cartContext from "../cartContext";

function CartItem(props) {
  const cart = useContext(cartContext);
  const cartProducts = cart.cartItems;
  function removeItem() {
    cart.setCartItems(
      cartProducts.filter((product) => {
        return product.id !== props.id;
      })
    );
  }

  props.numberOfItems === 0 && removeItem();
  return (
    <div className="cart-item-main">
      <div className="cart-item-details">
        <img src={props.image} alt={props.title} />
        <div className="cart-item-info">
          <p className="cart-item-name">{props.title}</p>
          <p className="cart-item-brand">{props.brand}</p>
          <p className="cart-item-unit-price">GH₵ {props.price}</p>
          <button onClick={removeItem}>Remove</button>
        </div>
      </div>
      <div className="qnty-price-container">
        <div className="cart-item-qnty">
          <i
            className="fas fa-minus"
            onClick={() => {
              props.numberOfItems >= 1
                ? props.setNumberOfItems(props.numberOfItems - 1)
                : props.setNumberOfItems(props.numberOfItems);
            }}
          />
          <p>{props.numberOfItems}</p>
          <i
            className="fas fa-plus"
            onClick={() => {
              props.setNumberOfItems(props.numberOfItems + 1);
            }}
          />
        </div>

        <div className="cart-item-total-price">
          <p>GH₵ {props.numberOfItems * props.cartProduct.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
