import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/ProductDetails.css';

function ProductDetails({ addToCart }) {
  // State variables
  const [product, setProduct] = useState(null); // Initially, no product data
  const [showCartMessage, setShowCartMessage] = useState(false); // To control the "Added to cart" message
  
  // Get the product ID from the URL parameters
  const { id } = useParams(); 
  
  // Create a reference to the image popup element
  const popupRef = useRef(null); 

  // Fetch product details when the component mounts or the 'id' changes
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        // Update the 'product' state with the fetched data
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        // Handle errors (e.g., display an error message)
      });
  }, [id]);

  // Function to handle adding the product to the cart
  function handleAddToCart() {
    addToCart(product); // Call the addToCart function passed from the parent component
    setShowCartMessage(true); // Show the "Added to cart" message
    setTimeout(() => {
      setShowCartMessage(false); // Hide the message after 1 second
    }, 1000);
  }

  // Function to handle clicks on the product image (to open the popup)
  const handleImageClick = () => {
    popupRef.current.style.display = 'flex'; // Show the popup
  };

  // Function to handle closing the image popup
  const handleClosePopup = () => {
    popupRef.current.style.display = 'none'; // Hide the popup
  };

  return (
    <div className="product-details">
      {/* Display the product image (clickable to open popup) */}
      {product ? ( // Conditionally render the image if 'product' is not null
        <img src={product.image} alt={product.title} onClick={handleImageClick} />
      ) : (
        <div>Loading image...</div> // Show a loading message while fetching
      )}

      {/* Display product details */}
      <div className="product-details__info">
        <h2>{product ? product.title : 'Loading...'}</h2> {/* Conditionally render title */}
        <p className="product-details__price">
          <small>$</small>
          <strong>{product ? product.price : '...'}</strong> {/* Conditionally render price */}
        </p>
        <p className="product-details__description">{product ? product.description : 'Loading...'}</p>

        {/* Display product rating */}
        {product && product.rating && ( // Conditionally render rating if available
          <div className="product-details__rating">
            <span>Rating: </span>
            <span>{product.rating.rate}</span>
            <span> out of {product.rating.count} reviews</span>
          </div>
        )}

        {/* Add to Cart button */}
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>

        {/* "Added to cart" message */}
        {showCartMessage && (
          <div className="cart-message">Product added to cart!</div>
        )}
      </div>

      {/* Image Popup */}
      <div className="product-details__popup" ref={popupRef}>
        {product && ( // Conditionally render image in popup
          <img src={product.image} alt={product.title} />
        )}
        <span className="product-details__popup-close" onClick={handleClosePopup}>
          &times;
        </span>
      </div>
    </div>
  );
}

export default ProductDetails;
