"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { AdminMenuPage } from "../Menu/page";

const AllProductpage = () => {
  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/api/v1/product");
      setProducts(data.products);
    } catch (error) {
      console.log("Product load error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete a product
  const deleteProduct = async (id) => {
    try {
      const confirmDelete = confirm("Are you sure you want to delete this product?");
      if (!confirmDelete) return;

      await axios.delete(`http://localhost:3001/api/v1/product/${id}`);
      fetchProducts(); // Refresh list
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <div className="hidden md:block w-1/5 p-6 border-r border-gray-200">
        <AdminMenuPage />
      </div>

      {/* Product Grid */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 text-button">All Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 text-black">
          {products?.map((product) => {
            let displayPrice = product.price;
            if (product.packageType && product.packageType.length > 0) {
              displayPrice = "Packages Available";
            }

            return (
              <div
                key={product._id}
                className="bg-background rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="flex-1 flex flex-col items-center p-3"
                >
                  <div className="w-full h-32 flex items-center justify-center mb-2">
                    <img
                      src={`http://localhost:3001/uploads/${product.photo}`}
                      alt={product.name}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <h2 className="text-sm font-semibold text-center text-button truncate w-full">
                    {product.name}
                  </h2>
                  <p className="text-sm font-medium text-text/80 mt-1 text-center">
                    {displayPrice}
                  </p>
                </Link>

                {/* Edit & Delete Buttons */}
                <div className="flex gap-2 p-2">
                  <Link
                    href={`/admin/products?editId=${product._id}`}
                    className="flex-1 bg-blue-500 text-white text-xs py-1 rounded-md text-center hover:bg-blue-600 transition"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="flex-1 bg-red-500 text-white text-xs py-1 rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProductpage;