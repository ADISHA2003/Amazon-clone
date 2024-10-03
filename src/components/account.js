import React, { useState } from 'react';
import './styles/acc.css';

function Acc() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would typically send the userData to your backend for saving
    console.log('User Data:', userData);
    // ... (Logic to update user data in your fake API or database)
  };

  return (
    <body>
    <div className="account">
      <h1>Your Account</h1>
      <form onSubmit={handleSubmit} className="account__form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={userData.address}
          onChange={handleChange}
          rows="4"
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={handleChange}
          required
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
    </body>
  );
}

export default Acc;
