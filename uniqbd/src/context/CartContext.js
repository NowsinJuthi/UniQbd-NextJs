"use client";

import React, { createContext, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add or merge items
  const addToCart = ({ product, selectedPkg, playerId, quantity }) => {
    if (!selectedPkg) return toast.error("⚠️ Please select a package first!");

    const isTopUp = product.category === "top-up";
    if (isTopUp && (!playerId || playerId.trim() === "")) {
      return toast.error("⚠️ Please enter your Player ID!");
    }

    const itemPrice = Number(
      selectedPkg.price.replace("TK", "").replace(",", "").trim()
    );

    const newItem = {
      id: product.id,
      name: product.name,
      img: product.img,
      package: selectedPkg.uc,
      playerId: playerId || "",
      price: itemPrice,
      quantity: quantity || 1,
    };

    setCart((prev) => {
      const existsIndex = prev.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.package === newItem.package &&
          item.playerId === newItem.playerId
      );

      if (existsIndex > -1) {
        const updated = [...prev];
        updated[existsIndex].quantity += newItem.quantity;
        toast.success("🛒The product is already in your cart. Quantity has been updated successfully!");
        return updated;
      } else {
        toast.success("🛒 Item added to cart!");
        return [...prev, newItem];
      }
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    toast.info("🗑️ Item removed from cart!");
  };

  const updateQuantity = (index, newQty) => {
    if (newQty < 1) return;
    setCart((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity: newQty } : item))
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 0;
  const total = subtotal - discount;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        subtotal,
        discount,
        total,
        totalItems,
      }}
    >
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
    </CartContext.Provider>
  );
};