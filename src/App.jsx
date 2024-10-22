import React, { useState } from 'react';
import Menu from './components/Menu';
import Order from './components/Orden';
import Pagar from './components/Pagar';

const App = () => {
  const [order, setOrder] = useState([]);
  const [isPaid, setIsPaid] = useState(false); // Estado para manejar el pago

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

  const handlePayment = () => {
    setIsPaid(true);
    setOrder([]); // Reiniciar la orden después de pagar (opcional)
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