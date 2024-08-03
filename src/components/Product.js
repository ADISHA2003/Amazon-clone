import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className="product__image" />
        <div className="product__info">
          <h3 className="product__title">{title}</h3> {/* Use h3 for title */}
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
