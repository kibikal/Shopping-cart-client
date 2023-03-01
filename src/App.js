import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import cartContext from "./cartContext";
import { useState } from "react";
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="app-container">
      <cartContext.Provider value = {{cartItems, setCartItems}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/product/:id" element={<ProductDetails />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element=<h1>Not found</h1> />
        </Routes>
        <div className="footer">
          <Footer />
        </div>
      </cartContext.Provider>
    </div>
  );
}

export default App;
