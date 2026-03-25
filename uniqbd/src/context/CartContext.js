"use client";

import React, { createContext, useState, useEffect } from "react";

// Create context
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (item) => {
    const exists = cart.find(
      (c) => c.id === item.id && c.package === item.package
    );

    if (exists) {
      // Increase quantity if already exists
      const updatedCart = cart.map((c) =>
        c.id === item.id && c.package === item.package
          ? { ...c, quantity: c.quantity + item.quantity }
          : c
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
  };

  // Remove item
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // Update quantity
  const updateQuantity = (index, newQty) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(1, newQty);
    setCart(updatedCart);
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, updateQuantity, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};