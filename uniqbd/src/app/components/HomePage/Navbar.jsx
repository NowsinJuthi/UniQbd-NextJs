"use client";

import React, { useContext, useEffect, useState, useRef } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiX, FiMinus, FiPlus } from "react-icons/fi";
import Link from "next/link";
import { ThemeToggle } from "../../theme-toggle";
import { CartContext } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    total,
    totalItems,
  } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const drawerRef = useRef(null);

  // Fix hydration mismatch safely
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Close drawer if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Quantity controls
  const increaseQty = (index) => updateQuantity(index, cart[index].quantity + 1);
  const decreaseQty = (index) => {
    if (cart[index].quantity > 1) updateQuantity(index, cart[index].quantity - 1);
  };

  // Remove item
  const removeItem = (index) => removeFromCart(index);

  return (
    <nav className="sticky top-0 z-50 shadow-lg shadow-button/30 bg-background/80 backdrop-blur-xl">

      <div className="mx-5 px-6 py-4 grid grid-cols-12 items-center">
        {/* Theme Toggle */}
        <div className="col-span-1">
          <ThemeToggle />
        </div>

        {/* Logo */}
        <div className="col-span-2">
          <Link href="/" className="text-3xl font-bold text-text">
            UniQbd
          </Link>
        </div>

        {/* Menu */}
        <div className="col-span-5 hidden md:flex justify-center items-center gap-2 font-medium">
          {[
            { name: "Home", link: "/" },
            { name: "Shop", link: "/shop" },
            { name: "Game TopUp", link: "/topup" },
            { name: "Gift Card", link: "/giftcard" },
            { name: "Contact", link: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="relative px-4 py-2 rounded-xl text-text transition-all duration-300 hover:scale-110 group overflow-hidden"
            >
              {item.name}
              <span className="absolute w-2 h-2 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-2 left-3"></span>
              <span className="absolute w-1.5 h-1.5 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-3 right-4 delay-100"></span>
              <span className="absolute w-1 h-1 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce bottom-2 left-6 delay-200"></span>
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="col-span-4 flex items-center justify-end gap-6">
          {/* Search */}
          <div className="hidden lg:flex items-center bg-imgcard px-3 py-1 rounded-md">
            <FiSearch className="text-text/70 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-text"
            />
          </div>

          {/* Account */}
          <Link href="/dashboard/login">
            <FiUser className="text-xl cursor-pointer hover:text-text transition" />
          </Link>

          {/* Cart Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative text-xl hover:scale-110 transition"
          >
            <FiShoppingCart />
            {mounted && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-button text-xs px-1.5 rounded-full text-white shadow-md shadow-button/40">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Cart Drawer */}
      {mounted && (
        <div
          ref={drawerRef}
          className={`fixed top-0 right-0 h-screen
            bg-gradient-to-br from-imgcard/95 via-imgcard/90 to-background/80
            backdrop-blur-2xl border-l border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]
            z-50
            transition-[width] duration-500 ease-out
            overflow-hidden
            ${isOpen ? "w-96" : "w-0"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-background/40 backdrop-blur-xl">
            <h2 className="text-lg font-semibold tracking-wide flex items-center gap-2">
              Cart <span className="ml-2 text-xs opacity-60">{cart.length}</span>
            </h2>
            <FiX
              onClick={() => setIsOpen(false)}
              className="text-xl cursor-pointer hover:rotate-90 transition-transform duration-300"
            />
          </div>

          {/* Items */}
          <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-220px)] scrollbar-thin scrollbar-thumb-button/40 scrollbar-track-transparent">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center opacity-70 space-y-3">
                <FiShoppingCart className="text-4xl opacity-40" />
                <p className="text-gray-300">Your cart is empty</p>
                <Link href="/shop">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-sm px-4 py-2 rounded-lg bg-button text-white hover:scale-105 transition-transform duration-300"
                  >
                    Browse Products
                  </button>
                </Link>
              </div>
            ) : (

              <AnimatePresence>
                {cart.map((item, i) => (
                  <motion.div
                    key={`cart-item-${i}-${item.name || "item"}-${item.package || "pkg"}`}
                    className="group text-white relative flex items-center gap-4 p-4 rounded-2xl 
      bg-gradient-to-br from-package/60 via-package/30 to-package/10
      backdrop-blur-xl border border-white/10
      hover:border-button/60 shadow-button/20 shadow-inner
      transition-all duration-300 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute -top-2 -right-2 bg-button text-xs px-2 py-[2px] rounded-full font-semibold shadow">
                        {item.quantity}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text leading-tight">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-[2px]">{item.package}</p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => decreaseQty(i)}
                          className="p-1 bg-imgcard rounded-full hover:bg-white/20 transition"
                        >
                          <FiMinus className="text-xs text-text" />
                        </button>
                        <span className="text-xs text-text">{item.quantity}</span>
                        <button
                          onClick={() => increaseQty(i)}
                          className="p-1 bg-imgcard rounded-full hover:bg-white/20 transition"
                        >
                          <FiPlus className="text-xs text-text" />
                        </button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="text-right flex flex-col items-end justify-between">
                      <p className="text-sm font-bold text-button">
                        {item.price * item.quantity} TK
                      </p>
                      <button
                        onClick={() => removeItem(i)}
                        className="mt-1 text-[11px] text-red-400 hover:text-red-300 opacity-70 hover:opacity-100 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>

          {/* Footer: Subtotal & Total */}
          <div className="absolute bottom-0 w-full p-4 border-t border-white/10 bg-imgcard/80 backdrop-blur-xl space-y-2">
            <div className="flex justify-between text-text text-sm">
              <span>Subtotal</span>
              <span>{subtotal} TK</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-400 text-sm">
                <span>Discount</span>
                <span>- {discount} TK</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-text text-lg">
              <span>Total</span>
              <span>{total} TK</span>
            </div>
            <Link href="/cart">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-button text-white py-2 rounded-lg hover:opacity-90 transition"
              >
                Go to Cart
              </button>
            </Link>

            <Link href="/checkout">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-button text-white mt-3 py-2 rounded-lg hover:opacity-90 transition"
              >
                Process to chekout
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;