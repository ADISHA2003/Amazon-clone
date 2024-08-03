import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

function ProductDetails({ addToCart }) {
  const [product, setProduct] = useState(null);
  const [showCartMessage] = useState(false);
  const { id } = useParams();
  const popupRef = useRef(null); // Reference to the popup element

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  if (!product) {
    return <div style={{ "textAlign": "center", "fontSize": "24px", "marginTop": "50px" }}>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setTimeout(() => {
      alert("Product added to cart!");
    }, 500);
  };

  const handleImageClick = () => {
    popupRef.current.style.display = 'flex'; // Show the popup
  };

  const handleClosePopup = () => {
    popupRef.current.style.display = 'none'; // Hide the popup
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} onClick={handleImageClick} />
      <div className="product-details__info">
        <h2>{product.title}</h2>
        <p className="product-details__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <p className="product-details__description">{product.description}</p>
        {/* Display the rating */}
        <div className="product-details__rating">
          <span>Rating: </span>
          <span>{product.rating.rate}</span>
          <span> out of {product.rating.count} reviews</span>
        </div>
        {/* Add more details like category, ratings, etc. */}
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button> {/* Add to Cart button */}
        {showCartMessage && (
          <div className="cart-message">Product added to cart!</div>
        )}
      </div>

      {/* Popup for the image */}
      <div className="product-details__popup" ref={popupRef}>
        <img src={product.image} alt={product.title} />
        <span className="product-details__popup-close" onClick={handleClosePopup}>&times;</span>
      </div>
    </div>
  );
}

export default ProductDetails;
