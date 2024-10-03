// src/components/Contact.js
import React from 'react';
import './styles/contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Please feel free to contact us with any questions,
        comments, or feedback.
      </p>
      <form className="contact__form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="1" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
