'use client';
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = [];
  const [cart, setCart] = useState(initialState);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      try {
        const parsedCartData = JSON.parse(cartData);
        setCart(parsedCartData);
      } catch (error) {
        console.error('Error parsing cart data:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    } else {
      const existingItemIndex = cart.findIndex(
        (item) => item.id === product.id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity = quantity;
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...product, quantity }]);
      }
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== parseInt(productId));
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
