import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        This is a simple Amazon clone built with React. It's a work in progress,
        but it demonstrates some basic features of a shopping website.
      </p>
      <p>
        The website uses a fake API to fetch product data, so you can explore
        and add items to your cart without actually making any purchases.
      </p>
      <p>
        Feel free to browse the products, add items to your cart, and check out
        the cart page.
      </p>
    </div>
  );
}

export default About;