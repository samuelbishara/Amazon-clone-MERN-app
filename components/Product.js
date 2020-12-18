import React from "react";

export default function Product(props) {
  return (
    <div className="product-container">
      <div className='product-info'>
        <p className="product-description">
          {props.title}
        </p>
        <p className="product-price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product-rating">
          <span>{props.rating}</span>
        </div>
      </div>

      <img
        className="product-image"
        src={props.imgURL}
      />
      <button className='product-btn'>Add to basket</button>
    </div>
  );
}
