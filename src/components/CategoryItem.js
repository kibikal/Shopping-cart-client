import React from "react";

function CategoryItem(props) {
  function handleClick() {
    props.onChoose(props.category)
  }

  
  return <li onClick={handleClick}>{props.category}</li>;
}

export default CategoryItem;
