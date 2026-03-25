"use client"

import React, { useContext, useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import Link from "next/link";
import { ThemeToggle } from "../../theme-toggle";
import { CartContext } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 const { cart } = useContext(CartContext);

  return (
    <nav className="sticky top-0 z-50 shadow-lg shadow-button/30">

      <div className="mx-5 px-6 py-4 grid grid-cols-12 items-center">

        {/* Theme Toggle */}
        <div className="col-span-1 items-center">
          <ThemeToggle />
        </div>

        {/* Logo */}
        <div className="col-span-2">
          <Link
            href="/"
            className="text-3xl font-bold text-text"
          >
            UniQbd
          </Link>
        </div>

        {/* Menu */}
        <div className="col-span-5 hidden md:flex justify-center items-center gap-2 font-medium">

          <Link
            href="/"
            className="relative px-4 py-2 rounded-xl font-medium text-text 
  border-b border-transparent
  transition-all duration-300 
  hover:scale-110 group overflow-hidden"
          >
            Home

            {/* Bubbles */}
            <span className="absolute w-2 h-2 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-2 left-3"></span>
            <span className="absolute w-1.5 h-1.5 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-3 right-4 delay-100"></span>
            <span className="absolute w-1 h-1 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce bottom-2 left-6 delay-200"></span>

          </Link>

          <Link href="/shop" className="relative px-4 py-2 rounded-xl font-medium text-text 
  border-b border-transparent
  transition-all duration-300 
  hover:scale-110 group overflow-hidden"
          >
            Shop
            {/* Bubbles */}
            <span className="absolute w-2 h-2 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-2 left-3"></span>
            <span className="absolute w-1.5 h-1.5 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-3 right-4 delay-100"></span>
            <span className="absolute w-1 h-1 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce bottom-2 left-6 delay-200"></span>
          </Link>
          <Link href="/topup" className="relative px-4 py-2 rounded-xl font-medium text-text 
  border-b border-transparent
  transition-all duration-300 
  hover:scale-110 group overflow-hidden"
          >
            Game TopUp
            {/* Bubbles */}
            <span className="absolute w-2 h-2 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-2 left-3"></span>
            <span className="absolute w-1.5 h-1.5 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-3 right-4 delay-100"></span>
            <span className="absolute w-1 h-1 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce bottom-2 left-6 delay-200"></span>
          </Link>
          <Link href="/giftcard" className="relative px-4 py-2 rounded-xl font-medium text-text 
  border-b border-transparent
  transition-all duration-300 
  hover:scale-110 group overflow-hidden"
          >
            Gift Card
            {/* Bubbles */}
            <span className="absolute w-2 h-2 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-2 left-3"></span>
            <span className="absolute w-1.5 h-1.5 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-3 right-4 delay-100"></span>
            <span className="absolute w-1 h-1 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce bottom-2 left-6 delay-200"></span>
          </Link>
          <Link href="/contact" className="relative px-4 py-2 rounded-xl font-medium text-text 
  border-b border-transparent
  transition-all duration-300 
  hover:scale-110 group overflow-hidden"
          >
            Contact

            {/* Bubbles */}
            <span className="absolute w-2 h-2 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-2 left-3"></span>
            <span className="absolute w-1.5 h-1.5 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce top-3 right-4 delay-100"></span>
            <span className="absolute w-1 h-1 bg-button rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce bottom-2 left-6 delay-200"></span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="col-span-4 flex items-center justify-end gap-10">

          {/* Search */}
          <div className="hidden lg:flex items-center bg-imgcard px-3 py-1 rounded-md">
            <FiSearch className="text-text/80 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-imgcard outline-none text-sm text-shadow-button"
            />
          </div>

          {/* Account */}
          <Link href="/dashboard/login">
            <FiUser className="text-xl cursor-pointer hover:text-text transition" />
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <div className="relative">
              {/* Cart Icon */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative text-xl hover:text-text transition"
              >
                <FiShoppingCart />
                {
                  cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-button text-xs px-1.5 rounded-full text-white">
                      {cart.length}
                    </span>
                  )
                }

              </button>

              {/* Dropdown / Toggle Content */}
              {isOpen && (
                <div className="absolute h-screen -right-10 mt-5.5 w-96 bg-imgcard  shadow-lg rounded-lg p-4 z-50">
                  <p className="text-sm text-text">Your cart items</p>
                  <ul className="mt-2">
                    <li className="py-1 border-b border-gray-200 dark:border-gray-700">Item 1</li>
                    <li className="py-1 border-b border-gray-200 dark:border-gray-700">Item 2</li>
                  </ul>
                  <button className="mt-3 w-full bg-button text-white py-2 rounded-lg hover:opacity-90">
                    Go to Cart
                  </button>
                </div>
              )}
            </div>
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;