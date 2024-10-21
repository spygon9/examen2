import React, { useState } from 'react';
import Menu from './components/Menu';
import Order from './components/Orden';

const App = () => {
  const [order, setOrder] = useState([]);
  const menuItems = [
    { id: 1, name: 'Hamburguesa', price: 8 },
    { id: 2, name: 'Pizza', price: 12 },
    { id: 3, name: 'Ensalada', price: 6 },
  ];

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1>Gestión de Órdenes de Menú 🍽️</h1>
      <Menu menuItems={menuItems} addToOrder={addToOrder} />
      <Order orderItems={order} total={calculateTotal()} />
      <a href="https://github.com/spygon9/examen2" target="_blank"> Repositorio </a>
    </div>
  );
};

export default App;