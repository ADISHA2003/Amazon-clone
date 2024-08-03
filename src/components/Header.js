// Header.js
import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header({ cartItems }) {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State for mobile menu

  // Function to handle opening/closing the mobile menu
  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Function to handle opening/closing the dropdowns
  const handleDropdownClick = (dropdownState, setDropdownState) => {
    setDropdownState(!dropdownState);
    // Close the mobile menu if it's open
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
  };

  return (
    <>
      <div className="header">
        <img className="header__logo" src="https://s-media-cache-ak0.pinimg.com/originals/95/98/b4/9598b485d75c30986078655d68259c62.png" alt="Amazon Logo" />
        <div className="header__search">
          <input type="text" className="header__searchInput" placeholder="Search Amazon" />
          <ul class="header__search-suggestions">
             <li>PC's</li>
             <li>Kids denim jeans</li>
             <li>Wall decors</li>
             <li>Smartphones</li>
             <li>Headphones</li>
             <li>Coffee makers</li>
             <li>Men's shoes</li>
             <li>Women's dresses</li>
             <li>Kitchen gadgets</li>
             <li>Home appliances</li>
          </ul>
          <button className="header__searchIcon">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        </div>
            <div className="navigation-bar"> {/* Add the navigation bar */}
              <Link to=""><a>Home</a></Link>
              <Link to="/cart"><a>Cart ({cartItems.length})</a></Link>
              <Link to="/account"><a>Account</a></Link>
              <Link to="/orders"><a>Orders</a></Link>
            </div>
    </>
  );
}

export default Header;
