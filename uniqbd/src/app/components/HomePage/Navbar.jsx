"use client"

import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import Link from "next/link";
import { ThemeToggle } from "../../theme-toggle";

const Navbar = () => {
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
            className="text-3xl font-bold text-button"
          >
            UniQbd
          </Link>
        </div>

        {/* Menu */}
        <div className="col-span-5 hidden md:flex justify-center items-center gap-2 font-medium">

          <Link
            href="/"
            className="relative px-4 py-2 rounded-xl font-medium text-button 
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

          <Link href="/shop" className="relative px-4 py-2 rounded-xl font-medium text-button 
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
          <Link href="/topup" className="relative px-4 py-2 rounded-xl font-medium text-button 
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
          <Link href="/giftcard" className="relative px-4 py-2 rounded-xl font-medium text-button 
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
          <Link href="/contact" className="relative px-4 py-2 rounded-xl font-medium text-button 
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
          <div className="hidden lg:flex items-center bg-card px-3 py-1 rounded-md">
            <FiSearch className="text-button/80 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm text-shadow-button"
            />
          </div>

          {/* Account */}
          <Link href="/dashboard/login">
            <FiUser className="text-xl cursor-pointer hover:text-button transition" />
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <FiShoppingCart className="text-xl hover:text-button transition" />
            <span className="absolute -top-2 -right-2 bg-button text-xs px-1.5 rounded-full text-white">
              2
            </span>
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;