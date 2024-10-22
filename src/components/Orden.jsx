import React from 'react';

const Order = ({ orderItems }) => {
  return (
    <div>
      <h2>Orden 📝</h2>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;