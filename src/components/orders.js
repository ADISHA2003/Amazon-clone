import React, { useState, useEffect } from 'react';
import './styles/orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Replace with your actual API call
        const response = await fetch('https://your-fake-api.com/orders');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Orders:', data); // Debugging log
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <ul className="orders__list">
          {orders.map((order) => (
            <li key={order.id} className="orders__item">
              <h2>Order #{order.id}</h2>
              {/* Display order details (date, items, total, etc.) */}
              <p>Date: {order.date}</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.title} - {item.quantity}
                  </li>
                ))}
              </ul>
              <p>Total: ${order.total}</p>
              {/* Add more order details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
