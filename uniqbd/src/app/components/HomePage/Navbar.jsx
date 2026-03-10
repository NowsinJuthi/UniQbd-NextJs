"use client"

import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import Link from "next/link";
import { ThemeToggle } from "../../theme-toggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 shadow-md bg-bgmain">

      <div className="mx-5 px-6 py-4 grid grid-cols-12 items-center">

        {/* Theme Toggle */}
        <div className="col-span- items-center">
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
        <div className="col-span-5 hidden md:grid grid-cols-5 text-center font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/shop" className="hover:text-blue-600 transition">
            Shop
          </Link>
          <Link href="/topup" className="hover:text-blue-600 transition">
            Game TopUp
          </Link>
          <Link href="/giftcard" className="hover:text-blue-600 transition">
            Gift Card
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="col-span-4 flex items-center justify-end gap-10">

          {/* Search */}
          <div className="hidden lg:flex items-center bg-card px-3 py-1 rounded-md">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm"
            />
          </div>

          {/* Account */}
          <Link href="/dashboard/login">
            <FiUser className="text-xl cursor-pointer hover:text-blue-600 transition" />
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <FiShoppingCart className="text-xl hover:text-blue-600 transition" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-xs px-1.5 rounded-full text-white">
              2
            </span>
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;