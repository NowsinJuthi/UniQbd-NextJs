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


  const addToCart = ({ product, selectedPkg, playerId, quantity }) => {
  
    if (!selectedPkg) {
      toast.error("⚠️ Please select a package first!");
      return;
    }


    const isTopUp = product.category === "top-up";

    if (isTopUp && (!playerId || playerId.trim() === "")) {
      toast.error("⚠️ Please enter your Player ID!");
      return;
    }

   
    const itemPrice = Number(
      selectedPkg.price.replace("TK", "").replace(",", "").trim(),
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

    let message = "";

    setCart((prev) => {
      const existsIndex = prev.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.package === newItem.package &&
          item.playerId === newItem.playerId,
      );

      let updatedCart;

      if (existsIndex > -1) {
        updatedCart = [...prev];
        updatedCart[existsIndex].quantity += newItem.quantity;

        message = "🛒 Quantity updated in cart!";
      } else {
        updatedCart = [...prev, newItem];

        message = "🛒 Item added to cart!";
      }

      return updatedCart;
    });

    setTimeout(() => {
      toast.success(message);
    }, 0);
  };

  // remove item
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    toast.info("🗑️ Item removed from cart!");
  };

  // update quantity
  const updateQuantity = (index, newQty) => {
    if (newQty < 1) return;

    setCart((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: newQty } : item,
      ),
    );
  };


  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

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

      <ToastContainer position="top-right" autoClose={2500} />
    </CartContext.Provider>
  );
};
