"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { AdminMenuPage } from "../Menu/page";
import { useRouter } from "next/navigation";

const AllProductpage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3001/api/v1/product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log("Product load error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const confirmDelete = confirm(
        "Are you sure you want to delete this product?"
      );
      if (!confirmDelete) return;

      await axios.delete(
        `http://localhost:3001/api/v1/product/${id}`
      );

      fetchProducts();
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6 p-6 min-h-screen">

      {/* SIDEBAR */}
      <div className="md:col-span-3 p-6 border-r bg-button/5 rounded-xl">
        <AdminMenuPage />
      </div>

      {/* MAIN CONTENT */}
      <div className="col-span-12 md:col-span-9 space-y-6">

        {/* HEADER */}
        <div className="bg-button/5 p-6 rounded-2xl flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">All Products</h1>
            <p className="text-gray-400 mt-1">
              Manage your products, edit or remove items
            </p>
          </div>

          <div className="px-4 py-2 bg-button/10 rounded-lg text-sm">
            Total: {products?.length || 0}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="bg-button/5 p-6 rounded-2xl">

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

            {products?.map((product) => {
              let displayPrice = product.price;

              if (
                product.packageType &&
                product.packageType.length > 0
              ) {
                displayPrice = "Packages Available";
              }

              return (
                <div
                  key={product._id}
                  className="bg-white/5 rounded-2xl p-3 flex flex-col hover:scale-[1.02] transition"
                >

                  {/* IMAGE */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex flex-col items-center flex-1"
                  >
                    <div className="w-full h-32 flex items-center justify-center mb-2">
                      <img
                        src={`http://localhost:3001/uploads/${product.photo}`}
                        alt={product.name}
                        className="max-h-full object-contain"
                      />
                    </div>

                    {/* NAME */}
                    <h2 className="text-sm font-semibold text-center text-button truncate w-full">
                      {product.name}
                    </h2>

                    {/* PRICE */}
                    <p className="text-xs text-text/70 mt-1 text-center">
                      {displayPrice}
                    </p>
                  </Link>

                  {/* ACTIONS (ADMIN STYLE BUTTONS) */}
                  <div className="flex gap-2 mt-3">

                    <button
                      onClick={() =>
                        router.push(
                          `/admin/products?editId=${product.slug}`
                        )
                      }
                      className="flex-1 bg-button/10 text-text text-xs py-2 rounded-xl hover:bg-button/20 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="flex-1 bg-red-500/10 text-red-400 text-xs py-2 rounded-xl hover:bg-red-500/20 transition"
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
    </div>
  );
};

export default AllProductpage;