import React from 'react';
import './Footer.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="app__footer">
      <div className="app__footer-content">
        <div className="app__footer-column">
          <h3 className="app__footer-title">Company</h3>
          <Link to="/about" style={{"textDecoration": "none"}}><a className="app__footer-link">About Us</a></Link>
          <Link to="/contact" style={{"textDecoration": "none"}}><a className="app__footer-link">Contact Us</a></Link>
        </div>
        <div className="app__footer-column">
          <h3 className="app__footer-title">Resources</h3>
          <a href="#" className="app__footer-link">Help Center</a>
          <a href="#" className="app__footer-link">Privacy Policy</a>
        </div>
        <div className="app__footer-column">
          <h3 className="app__footer-title">Social</h3>
          <a href="#" className="app__footer-link">Facebook</a>
          <a href="#" className="app__footer-link">Twitter</a>
        </div>
      </div>
      <p className="app__footer-copyright">&copy; 2024 Your Company</p>
    </footer>
  );
}

export default Footer;
