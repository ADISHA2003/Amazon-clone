import React from 'react';
import './styles/HelpCenter.css';

function HelpCenter() {
  return (
    <div className="help-center">
      <h1>Help Center</h1>

      {/* You can organize help content in different ways: */}

      <h2>Frequently Asked Questions (FAQs)</h2>
      <ul>
        <li>
          <h3>How do I track my order?</h3>
          <p>You can track your order by going to "Your Orders" and clicking on the specific order.</p>
        </li>
        <li>
          <h3>What are the shipping options?</h3>
          <p>We offer standard shipping and express shipping. See our shipping policy for details.</p>
        </li>
        {/* Add more FAQs here */}
      </ul>

      <h2>Contact Us</h2>
      <p>If you can't find the answer you're looking for, please feel free to contact us.</p>
      {/* Add a contact form or link to your contact page */}
    </div>
  );
}

export default HelpCenter;
