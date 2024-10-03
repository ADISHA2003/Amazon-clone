// src/components/Cart.js
import React from 'react';
import './styles/Cart.css';

function Cart({ cartItems, removeFromCart, updateCartItemQuantity }) { 
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart__list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart__item">
              <img src={item.image} alt={item.title} className="cart__image" />
              <div className="cart__info">
                <h3 className="cart__title">{item.title}</h3>
                <p className="cart__price">
                  <small>$</small>
                  <strong>{item.price}</strong>
                </p>
              </div>
              <div className="cart__quantity">
                <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="cart__remove-button">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
