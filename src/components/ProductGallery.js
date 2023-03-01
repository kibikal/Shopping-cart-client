import React from 'react'

function ProductGallery(props) {
  return (
    <img src={props.image} alt={props.title} />
  )
}

export default ProductGallery