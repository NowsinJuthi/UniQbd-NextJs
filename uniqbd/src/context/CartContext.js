"use client";

import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart with validation
  const addToCart = ({ product, selectedPkg, playerId, quantity }) => {
    // 1️⃣ Package selected?
    if (!selectedPkg) {
      return toast.error("⚠️ Please select a package first!");
    }

    // 2️⃣ Top-up product must have Player ID
    if (
      product.category?.toLowerCase().includes("top up") &&
      (!playerId || !playerId.trim())
    ) {
      return toast.error("⚠️ Please enter your Player ID!");
    }

    const itemPrice = Number(
      selectedPkg.price.replace("TK", "").replace(",", "").trim()
    );

    const newItem = {
      id: product.id,
      name: product.name,
      img: selectedPkg.img,
      package: selectedPkg.label,
      playerId: playerId || "",
      price: itemPrice,
      quantity: quantity || 1,
    };

    // 3️⃣ Prevent duplicate (same product + package + playerId)
    const exists = cart.find(
      (item) =>
        item.id === newItem.id &&
        item.package === newItem.package &&
        item.playerId === newItem.playerId
    );

    if (exists) {
      return toast.warning("⚠️ This package is already in your cart!");
    }

    // 4️⃣ Add to cart
    setCart((prev) => [...prev, newItem]);
    toast.success("🛒 Item added to cart!");
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

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};