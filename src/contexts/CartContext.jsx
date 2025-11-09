// src/contexts/CartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [carts, setCarts] = useState({ default: [] });
  const [currentCart, setCurrentCart] = useState('default');

  useEffect(() => {
    const savedCarts = localStorage.getItem('userCarts');
    if (savedCarts) {
      setCarts(JSON.parse(savedCarts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userCarts', JSON.stringify(carts));
  }, [carts]);

  const addToCart = (product, cartName = 'default') => {
    setCarts(prev => {
      const cart = prev[cartName] || [];
      const existingItem = cart.find(item => item.id === product.id);
      
      if (existingItem) {
        return {
          ...prev,
          [cartName]: cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...prev,
          [cartName]: [...cart, { ...product, quantity: 1 }]
        };
      }
    });
  };

  const removeFromCart = (productId, cartName = 'default') => {
    setCarts(prev => ({
      ...prev,
      [cartName]: prev[cartName].filter(item => item.id !== productId)
    }));
  };

  const updateQuantity = (productId, quantity, cartName = 'default') => {
    if (quantity <= 0) {
      removeFromCart(productId, cartName);
      return;
    }

    setCarts(prev => ({
      ...prev,
      [cartName]: prev[cartName].map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    }));
  };

  const createCart = (cartName) => {
    if (!carts[cartName]) {
      setCarts(prev => ({ ...prev, [cartName]: [] }));
    }
  };

  const value = {
    carts,
    currentCart,
    setCurrentCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    createCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}