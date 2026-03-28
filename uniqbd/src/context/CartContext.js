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

  // 1️⃣ Validate package
  if (!selectedPkg) {
    toast.error("⚠️ Please select a package first!");
    return;
  }

  // 2️⃣ Check Player ID for top-up products
  const isTopUp = product.category === "top-up";

  if (isTopUp && (!playerId || playerId.trim() === "")) {
    toast.error("⚠️ Please enter your Player ID!");
    return;
  }

  // 3️⃣ Convert price to number
  const itemPrice = Number(
    selectedPkg.price.replace("TK", "").replace(",", "").trim()
  );

  // 4️⃣ Create cart item
  const newItem = {
    id: product.id,
    name: product.name,
    img: product.img,
    package: selectedPkg.uc,
    playerId: playerId || "",
    price: itemPrice,
    quantity: quantity || 1,
  };

  // 5️⃣ Update cart safely
  setCart((prev) => {

    const existsIndex = prev.findIndex(
      (item) =>
        item.id === newItem.id &&
        item.package === newItem.package &&
        item.playerId === newItem.playerId
    );

    let updatedCart;

    if (existsIndex > -1) {

      // Update quantity if same item exists
      updatedCart = [...prev];
      updatedCart[existsIndex].quantity += newItem.quantity;

      toast.success("🛒 Product already in cart. Quantity updated!");

    } else {

      // Add new item
      updatedCart = [...prev, newItem];

      toast.success("🛒 Item added to cart!");

    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return updatedCart;
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