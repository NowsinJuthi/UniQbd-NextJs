import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500 cursor-pointer">
          UniQbd
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link className="hover:text-orange-500 transition" href='/'>Home</Link>
          <Link className="hover:text-orange-500 transition" href='/shop'>Shop</Link>
          <Link className="hover:text-orange-500 transition" href='/about'>GameTopUo</Link>
          <Link className="hover:text-orange-500 transition" href='/about'>Gift Card</Link>
          <Link className="hover:text-orange-500 transition" href='/contact'>Contact</Link>

        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-800 px-3 py-1 rounded-md">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm placeholder-gray-400"
            />
          </div>

          {/* Account */}
          <div className="account">
            <Link href='/dashboard/login'> <FiUser className="text-xl cursor-pointer hover:text-orange-500 transition" />
            </Link>
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <Link href= '/cart'>
              <FiShoppingCart className="text-xl hover:text-orange-500 transition" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-xs px-1.5 rounded-full">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;