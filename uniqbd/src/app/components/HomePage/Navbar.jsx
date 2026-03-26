"use client";

import React, { useContext, useEffect, useState } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import Link from "next/link";
import { ThemeToggle } from "../../theme-toggle";
import { CartContext } from "@/context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch safely
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // total quantity count (client only)
  const totalItems = mounted ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0;

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

              {/* bubble animation */}
              <span className="absolute w-2 h-2 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-2 left-3"></span>
              <span className="absolute w-1.5 h-1.5 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-3 right-4 delay-100"></span>
              <span className="absolute w-1 h-1 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce bottom-2 left-6 delay-200"></span>
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="col-span-4 flex items-center justify-end gap-6">
          {/* search */}
          <div className="hidden lg:flex items-center bg-imgcard px-3 py-1 rounded-md">
            <FiSearch className="text-text/70 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-text"
            />
          </div>

          {/* account */}
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
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {mounted && (
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />
      )}

      {/* Cart Drawer */}
      {mounted && (
        <div
          onClick={(e) => e.stopPropagation()}
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
            <h2 className="text-lg font-semibold tracking-wide">
              🛒 Cart{" "}
              {mounted && (
                <span className="ml-2 text-xs opacity-60">{cart.length}</span>
              )}
            </h2>
            <FiX
              onClick={() => setIsOpen(false)}
              className="text-xl cursor-pointer hover:rotate-90 transition"
            />
          </div>

          {/* Items */}
          <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-170px)] scrollbar-thin scrollbar-thumb-button/40 scrollbar-track-transparent">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center opacity-70 space-y-3">
                <FiShoppingCart className="text-4xl opacity-40" />
                <p>Your cart is empty</p>
                <Link href="/shop">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-sm px-4 py-2 rounded-lg bg-button text-white hover:scale-105 transition"
                  >
                    Browse Products
                  </button>
                </Link>
              </div>
            ) : (
              cart.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-background/40 to-background/10 border border-white/5 hover:border-button/40 hover:shadow-lg hover:shadow-button/20 transition-all duration-300"
                >
                  <img
                    src={item.img}
                    className="w-14 h-14 rounded-lg object-cover group-hover:scale-105 transition"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-tight">{item.name}</p>
                    <p className="text-xs opacity-60">{item.package}</p>
                    <p className="text-xs mt-1">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold text-button">
                    ৳{item.price * item.quantity}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 w-full p-4 border-t border-white/10 bg-imgcard">
            <Link href="/cart">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-button text-white py-2 rounded-lg hover:opacity-90 transition"
              >
                Go to Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;