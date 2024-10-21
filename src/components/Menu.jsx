import React from 'react';

const Menu = ({ menuItems, addToOrder }) => {
  return (
    <div>
      <h2>Menú</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToOrder(item)}>Agregar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;