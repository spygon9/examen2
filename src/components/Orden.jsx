import React from 'react';

const Order = ({ orderItems, total }) => {
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
      <h3>Total 💵: ${total}</h3>
    </div>
  );
};

export default Order;