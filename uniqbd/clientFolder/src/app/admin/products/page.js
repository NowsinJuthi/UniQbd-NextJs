import React from "react";
import Link from "next/link";
import {
  FaUser,
  FaBoxOpen,
  FaSignOutAlt,
  FaChartLine,
  FaComments,
} from "react-icons/fa";
import { AdminMenuPage } from "../Menu/page";

const Products = () => {
  return (
    <div className="min-h-screen p-6 text-button">
      <div className="max-w-7xl mx-auto rounded-3xl bg-button/4 shadow-lg shadow-button/30 overflow-hidden">

        <div className="grid md:grid-cols-12">

          {/* ================= Sidebar ================= */}
          <div className="md:col-span-3 p-8 border-r bg-button/5">

            <h2 className="text-2xl font-bold mb-10 tracking-wide">
            Admin Panel
            </h2>

            <AdminMenuPage/>
          </div>

          {/* ================= Product Form ================= */}
          <div className="md:col-span-9 p-10">

            <h1 className="text-3xl font-bold mb-8">
              Add New Product
            </h1>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Product Name */}
              <div>
                <label className="text-sm mb-2 block">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full bg-button/10 shadow-inner shadow-button/20 rounded-xl px-4 py-3 text-button focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm mb-2 block">
                  Quantity
                </label>
                <input
                  type="number"
                  placeholder="Enter quantity"
                  className="w-full bg-button/10 shadow-inner shadow-button/20 rounded-xl px-4 py-3 text-button focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Short Description */}
              <div className="md:col-span-2">
                <label className=" text-sm mb-2 block">
                  Short Description
                </label>
                <input
                  type="text"
                  placeholder="Short description"
                  className="w-full bg-button/10 shadow-inner shadow-button/20 rounded-xl px-4 py-3 text-button focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Long Description */}
              <div className="md:col-span-2">
                <label className="text-sm mb-2 block">
                  Long Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Long product description..."
                  className="w-full bg-button/10 shadow-inner shadow-button/20 rounded-xl px-4 py-3 text-button focus:outline-none focus:border-orange-500 transition resize-none"
                />
              </div>

              {/* Regular Price */}
              <div>
                <label className="text-sm mb-2 block">
                  Regular Price
                </label>
                <input
                  type="number"
                  placeholder="Enter regular price"
                  className="w-full bg-button/10 shadow-inner shadow-button/20 rounded-xl px-4 py-3 text-button focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Discount Price */}
              <div>
                <label className="text-sm mb-2 block">
                  Discount Price
                </label>
                <input
                  type="number"
                  placeholder="Enter discount price"
                  className="w-full bg-button/10 shadow-inner shadow-button/20 rounded-xl px-4 py-3 text-button focus:outline-none focus:border-orange-500 transition"
                />
              </div>

            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button className="w-full bg-button hover:bg-button/70 text-white font-semibold py-3 rounded-xl transition duration-300">
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