import React from 'react';
import { getMenu } from '../services/menuApi';
import { useState } from 'react';
import { useEffect } from 'react';


export const Menu = () => {
  const [item, setItems]
  const [loading, setLoading] = useState(true);

  useEffect(( => {
    fetch("ttps://api-menu-9b5g.onrender.com/menu")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []));
  
  return (
    <>
    <h1>Menu</h1>
    
    {loading ? (
      <h3>Loading...</h3>
    ) : (
      items.map((item) => (
        <Item 
          key ={item.id}
          name = {item.name}
          description = {item.description}
          price = {item.price}
        />
      ))
    )}
    </>
  );
};