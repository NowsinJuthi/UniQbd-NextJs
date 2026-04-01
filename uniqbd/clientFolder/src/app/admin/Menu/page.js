"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaUser,
  FaBoxOpen,
  FaSignOutAlt,
  FaChartLine,
  FaComments,
} from "react-icons/fa";
import { FaNotesMedical } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

export const AdminMenuPage = () => {
  const pathname = usePathname(); // current URL path

  const menuItems = [
    { href: "/admin", name: "Dashboard", icon: <FaChartLine /> },
    { href: "/admin/orders", name: "Orders", icon: <FaBoxOpen /> },
    { href: "/admin/products", name: "Add Products", icon: <AiFillProduct  /> },
    { href: "/admin/notes", name: "Add Note", icon: <FaNotesMedical   /> },
    { href: "/admin/homeSlider", name: "Home Sliders", icon: <AiFillPicture  /> },
    { href: "/admin/reviews", name: "Reviews", icon: <MdRateReview  /> },
  ];

  return (
    <div className="md:col-span-3 bg-gradient-to-b from-imgcard to-background border-r border-white/10 p-6 rounded-lg">
      {/* Profile */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-button flex items-center justify-center text-white text-xl shadow-lg">
          <FaUser />
        </div>
        <p className="mt-3 font-semibold text-text">My Account</p>
        <span className="text-xs opacity-60">UniQbd User</span>
      </div>

      {/* Menu */}
      <div className="space-y-2 text-sm">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition
                  ${isActive ? "bg-button text-white shadow-md shadow-button/30" : "hover:bg-white/5 text-text/80"}`}
              >
                {item.icon}
                {item.name}
              </div>
            </Link>
          );
        })}

        {/* Logout */}
        <button className="flex items-center gap-3 w-full mt-6 p-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};
