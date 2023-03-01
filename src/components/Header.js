import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import cartContext from "../cartContext";

function Header() {
  const cart = useContext(cartContext);
  const cartProducts = cart.cartItems;
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="logo-container">
        <h3 className="logo">
          <span>KI</span>SHOP
        </h3>
      </div>

      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="cart-icon">
          <i className="fas fa-shopping-cart" onClick={()=>{navigate("/cart")}}>
            <span
              style={{
                backgroundColor:
                  cartProducts.length === 0 ? "red" : "rgb(47, 180, 55)",
              }}
            >
              {cartProducts.length}
            </span>
          </i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
