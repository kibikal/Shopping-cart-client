import React, { useState } from "react";
import Product from "./Product";
import products from "../products";
import CategoryItem from "./CategoryItem";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

function Shop(props) {
  const [allProducts, setAllProducts] = useState(products);
  const navigate = useNavigate();
  function chooseCategory(id) {
    setAllProducts(
      products.filter((product) => {
        if (id === "All") {
          return products;
        }
        return _.startCase(product.category) === id;
      })
    );
  }

  return (
    <>
      <h1 className="shop-heading">SHOP</h1>
      <hr className="shop-rule" />
      <div className="shop-container">
        <div className="sidebar">
          <h3>Categories</h3>
          <ul>
            <CategoryItem onChoose={chooseCategory} category="All" />
            <CategoryItem onChoose={chooseCategory} category="Smartphones" />
            <CategoryItem onChoose={chooseCategory} category="Laptops" />
            <CategoryItem onChoose={chooseCategory} category="Fragrances" />
            <CategoryItem onChoose={chooseCategory} category="Groceries" />
            <CategoryItem
              onChoose={chooseCategory}
              category="Home Decoration"
            />
          </ul>
        </div>
        <div className="products">
          {allProducts.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                showDetails={() => navigate(`/shop/product/${product.id}`)}
                name={product.title}
                image={product.thumbnail}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Shop;
