import React from "react";
import Link from "next/link";
import {
  FaUser,
  FaBoxOpen,
  FaSignOutAlt,
  FaChartLine,
  FaComments,
} from "react-icons/fa";

const Products = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] p-6">
      <div className="max-w-7xl mx-auto bg-[#111827] rounded-3xl shadow-2xl border border-gray-800 overflow-hidden">

        <div className="grid md:grid-cols-12">

          {/* ================= Sidebar ================= */}
          <div className="md:col-span-3 bg-[#0b1120] text-white p-8 border-r border-gray-800">

            <h2 className="text-2xl font-bold mb-10 tracking-wide">
            Admin Panel
            </h2>

            <div className="flex flex-col gap-3 text-sm">

              {[
                { href: "/admin", text: "Dashboard", icon: <FaChartLine /> },
                { href: "/admin/orders", text: "Orders", icon: <FaBoxOpen /> },
                { href: "/admin/products", text: "Add Products", icon: <FaUser />, active: true },
                { href: "/admin/notes", text: "Add Note", icon: <FaComments /> },
                { href: "/admin/reviews", text: "Reviews", icon: <FaComments /> },
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300
                    ${item.active
                        ? "bg-orange-500 text-white shadow-lg"
                        : "hover:bg-gray-800"
                      }`}
                  >
                    {item.icon}
                    {item.text}
                  </div>
                </Link>
              ))}

              <button className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 px-4 py-3 rounded-xl mt-6 transition-all duration-300">
                <FaSignOutAlt /> Logout
              </button>

            </div>
          </div>

          {/* ================= Product Form ================= */}
          <div className="md:col-span-9 p-10">

            <h1 className="text-3xl font-bold text-white mb-8">
              Add New Product
            </h1>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Product Name */}
              <div>
                <label className="text-gray-300 text-sm mb-2 block">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="text-gray-300 text-sm mb-2 block">
                  Quantity
                </label>
                <input
                  type="number"
                  placeholder="Enter quantity"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Short Description */}
              <div className="md:col-span-2">
                <label className="text-gray-300 text-sm mb-2 block">
                  Short Description
                </label>
                <input
                  type="text"
                  placeholder="Short description"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Long Description */}
              <div className="md:col-span-2">
                <label className="text-gray-300 text-sm mb-2 block">
                  Long Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Long product description..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition resize-none"
                />
              </div>

              {/* Regular Price */}
              <div>
                <label className="text-gray-300 text-sm mb-2 block">
                  Regular Price
                </label>
                <input
                  type="number"
                  placeholder="Enter regular price"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Discount Price */}
              <div>
                <label className="text-gray-300 text-sm mb-2 block">
                  Discount Price
                </label>
                <input
                  type="number"
                  placeholder="Enter discount price"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                />
              </div>

            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-300">
                Create Product
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;