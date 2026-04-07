"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { AdminMenuPage } from "../Menu/page";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/api/v1/category");
        setCategories(data.categories || data); // depends on your response
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6 p-6">
      <div className="md:col-span-3 p-8 border-r bg-button/5">
        <AdminMenuPage />
      </div>

      <div className="col-span-12 md:col-span-9">
        <h1 className="text-3xl font-bold mb-8">Add New Product</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Name */}
          <div>
            <label className="text-sm mb-2 block">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full bg-button/10 shadow-inner shadow-button/20 rounded-xl px-4 py-3 text-button focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="text-sm mb-2 block">Quantity</label>
            <input
              type="number"
              placeholder="Enter quantity"
              className="w-full bg-button/10 shadow-inner shadow-button/20 rounded-xl px-4 py-3 text-button focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-2">
            <label className="text-sm mb-2 block">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-button/10 shadow-inner shadow-button/20 rounded-xl px-4 py-3 text-button focus:outline-none focus:border-orange-500 transition"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Short Description */}
          <div className="md:col-span-2">
            <label className=" text-sm mb-2 block">Short Description</label>
            <input
              type="text"
              placeholder="Short description"
              className="w-full bg-button/10 shadow-inner shadow-button/20 rounded-xl px-4 py-3 text-button focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          {/* Long Description */}
          <div className="md:col-span-2">
            <label className="text-sm mb-2 block">Long Description</label>
            <textarea
              rows="4"
              placeholder="Long product description..."
              className="w-full bg-button/10 shadow-inner shadow-button/20 rounded-xl px-4 py-3 text-button focus:outline-none focus:border-orange-500 transition resize-none"
            />
          </div>

          {/* Regular Price */}
          <div>
            <label className="text-sm mb-2 block">Regular Price</label>
            <input
              type="number"
              placeholder="Enter regular price"
              className="w-full bg-button/10 shadow-inner shadow-button/20 rounded-xl px-4 py-3 text-button focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          {/* Discount Price */}
          <div>
            <label className="text-sm mb-2 block">Discount Price</label>
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
  );
};

export default Products;