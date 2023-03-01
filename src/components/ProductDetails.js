import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../products";
import { findProductById } from "../services/findClickedProduct";
import ProductGallery from "./ProductGallery";
import ImageSwitchIcon from "./ImageSwitchIcon";
import AddToCartButton from "./AddToCartButton";
import cartContext from "../cartContext";

function ProductDetails() {
  const cart = useContext(cartContext);
  const navigation = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [largeImg, setLargeImg] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const p = findProductById(parseInt(params?.id), products);
    p && setProduct(p);
  }, [params?.id]);

  function switchImg(event) {
    if (event.target.id === "next" && largeImg < product.images.length - 1) {
      setLargeImg(largeImg + 1);
    } else if (event.target.id === "prev" && largeImg > 0) {
      event.target.id === "prev" && setLargeImg(largeImg - 1);
    }
  }

  function addToCart() {
    cart.cartItems.includes(product)
      ? setAddedToCart(true)
      : setAddedToCart(false);
    !addedToCart
      ? cart.setCartItems((prevItems) => {
          return [product, ...prevItems];
        })
      : cart.setCartItems((prevItems) => {
          return [...prevItems];
        });
    navigation("/cart");
  }

  return (
    <React.Fragment>
      {product ? (
        <div className="product-details-container">
          <div className="details-left">
            <div className="product-img-container">
              <ProductGallery image={product?.images[largeImg]}  title = {product.title}/>
              <div className="image-navigation">
                <div className="brand">
                  <p>
                    {largeImg + 1}/{product?.images.length}
                  </p>
                </div>
                <div className="change-img-icons">
                  <ImageSwitchIcon
                    id="prev"
                    icon="fa-solid fa-chevron-left"
                    onClick={switchImg}
                  />
                  <ImageSwitchIcon
                    id="next"
                    icon="fa-solid fa-chevron-right"
                    onClick={switchImg}
                  />
                </div>
              </div>
              <div className="thumbnails">
                {product?.images.map((img, i) => (
                  <img
                    key={i}
                    onClick={() => setLargeImg(i)}
                    src={img}
                    alt={product?.title}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="details-right">
            <div className="right-top">
              <h1>{product?.title}</h1>
              <h4>{product?.brand}</h4>
              <p className="description">{product?.description}</p>
              <div className="extra-info">
                <p>Category: {product?.category}</p>
                <p>Brand: {product?.brand}</p>
                <p>Discount: {product?.discountPercentage}%</p>
                <p>Stock: {product?.stock}</p>
              </div>
              <div className="price-container">
                <p>GH₵ {product?.price}</p>
              </div>
            </div>
            <AddToCartButton onClick={addToCart}>Add to cart</AddToCartButton>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <h1 style={{ fontWeight: 900 }}>No Product Found!</h1>
          <div style={{ marginTop: "10px" }} />
          <button
            style={{
              padding: "5px",
              borderStyle: "none",
              color: "midnightblue",
              outline: "none",
            }}
            onClick={() => navigation("/shop")}
          >
            Go Back
          </button>
        </div>
      )}
    </React.Fragment>
  );
}

export default ProductDetails;
