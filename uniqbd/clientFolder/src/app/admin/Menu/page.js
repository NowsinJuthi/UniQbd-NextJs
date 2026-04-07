"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  FaUser,
  FaBoxOpen,
  FaSignOutAlt,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import { FaNotesMedical } from "react-icons/fa";
import { AiFillPicture, AiFillProduct } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";

export const AdminMenuPage = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { href: "/admin", name: "Dashboard", icon: <FaChartLine /> },
    { href: "/admin/orders", name: "Orders", icon: <FaBoxOpen /> },

    {
      name: "Add Products",
      icon: <AiFillProduct />,
      children: [
        { href: "/admin/all-products", name: "All Products" },
        { href: "/admin/products", name: "Add Product" },
        { href: "/admin/categories", name: "Categories" },
      ],
    },

    { href: "/admin/notes", name: "Add Note", icon: <FaNotesMedical /> },
    { href: "/admin/homeSlider", name: "Home Sliders", icon: <AiFillPicture /> },
    { href: "/admin/reviews", name: "Reviews", icon: <MdRateReview /> },
  ];

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

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

          // menu without submenu
          if (!item.children) {
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition
                  ${
                    isActive
                      ? "bg-button text-white shadow-md shadow-button/30"
                      : "hover:bg-white/5 text-text/80"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </div>
              </Link>
            );
          }

          // menu WITH submenu
          return (
            <div key={item.name}>
              <div
                onClick={() => toggleMenu(item.name)}
                className="flex items-center justify-between gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/5 text-text/80"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {item.name}
                </div>

                {openMenu === item.name ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {/* submenu */}
              {openMenu === item.name && (
                <div className="ml-8 mt-1 space-y-1">

                  {item.children.map((sub) => {

                    const isSubActive = pathname === sub.href;

                    return (
                      <Link key={sub.href} href={sub.href}>
                        <div
                          className={`p-2 rounded-lg cursor-pointer text-sm
                          ${
                            isSubActive
                              ? "bg-button text-white"
                              : "hover:bg-white/5 text-text/70"
                          }`}
                        >
                          {sub.name}
                        </div>
                      </Link>
                    );
                  })}

                </div>
              )}
            </div>
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