import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import Pagar from './components/Pagar';

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [isPaid, setIsPaid] = useState(false);

  // Función para obtener los elementos del menú desde la API
  useEffect(() => {
    fetch('https://api-menu-9b5g.onrender.com/menu')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setMenuItems(data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price, 0);
  };

  const handlePayment = () => {
    setIsPaid(true);
    setOrder([]); // Reiniciar la orden después de pagar
  };

  return (
    <div>
      <h1>Gestión de Órdenes de Menú 🍽️</h1>
      <Menu menuItems={menuItems} addToOrder={addToOrder} />
      <Order orderItems={order} />
        <Pagar 
          handlePayment={handlePayment} 
          total={calculateTotal()} 
          isPaid={isPaid} 
        />
    </div>
  );
};

export default App;