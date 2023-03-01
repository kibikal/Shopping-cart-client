import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import cartContext from "../cartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useContext(cartContext);
  const cartProducts = cart.cartItems;
  const navigate = useNavigate();
  let cartGrandTotalPrice = 0;
  let totalNumberOfCartItems = 0;
  const [numberOfItems, setNumberOfItems] = useState(1);
  return (
    <div className="cart-main">
      <h1>Cart</h1>

      <div className="cart-items-container">
        {cartProducts.map((product, index) => {
          cartGrandTotalPrice += product.price * numberOfItems;
          totalNumberOfCartItems += numberOfItems;
          return (
            <CartItem
              key={index}
              id={product.id}
              image={product.images[0]}
              title={product.title}
              brand={product.brand}
              price={product.price}
              cartProduct={product}
              numberOfItems={numberOfItems}
              setNumberOfItems={setNumberOfItems}
            />
          );
        })}
      </div>
      {cartProducts.length > 0 ? (
        <div className="cart-summary">
          <h4>Total: GH₵ {cartGrandTotalPrice}</h4>
          <p>{totalNumberOfCartItems} {totalNumberOfCartItems===1?"item": "items"} in cart</p>
          <button className="check-out-button">Checkout</button>
        </div>
      ) : (
        <div className="empty-cart-notice">
          <p>Cart is empty</p>
          <button
            onClick={() => {
              navigate("/shop");
            }}
          >
            Go shopping!
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;