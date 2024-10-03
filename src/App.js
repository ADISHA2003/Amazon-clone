import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Cart from './components/Cart'; 
import About from './components/about';
import Contact from './components/contact';
import Account from './components/account';
import Orders from './components/orders';
import HelpCenter from './components/Helpcenter';
import PrivacyPolicy from './components/privacypolicy';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <div className="app">
        <Header cartItems={cartItems} /> 

        <Routes>
          <Route path="/" element={
            <div className="app__home">
              <div className="app__row">
                {filteredProducts.map(product => ( 
                  <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
                    addToCart={addToCart} 
                  />
                ))}
              </div>
            </div>
          } />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateCartItemQuantity={updateCartItemQuantity} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/help" element={<HelpCenter/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
