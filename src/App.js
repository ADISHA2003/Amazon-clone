import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Cart from './components/Cart'; // Import Cart component
import About from './components/about';
import Contact from './components/contact';
import Account from './components/account';
import Orders from './components/orders';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]); // State for cart items
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filteredProducts
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className="app">
        <Header cartItems={cartItems} /> {/* Pass cart items to Header */}

        <Routes>
          <Route path="/" element={
            <div className="app__home">
              <div className="app__row">
                {filteredProducts.map(product => ( // Use filteredProducts
                  <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
                    addToCart={addToCart} // Pass addToCart function to Product
                  />
                ))}
              </div>
            </div>
          } />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/orders" elements={<Orders/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;