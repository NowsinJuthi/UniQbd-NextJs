"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Topup = () => {
  const [topupProducts, setTopupProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopupProducts = async () => {
      try {
        setLoading(true);

        const { data: categoryData } = await axios.get(
          "http://localhost:3001/api/v1/category"
        );

        const topupCategory = categoryData.categories.find(
          (cat) => cat.name.toLowerCase() === "top-up"
        );

        if (!topupCategory) {
          setTopupProducts([]);
          setLoading(false);
          return;
        }

        const { data: productsRes } = await axios.get(
          `http://localhost:3001/api/v1/product?category=${topupCategory._id}`
        );

        setTopupProducts(productsRes.products || []);
      } catch (error) {
        console.error(error);
        setTopupProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTopupProducts();
  }, []);

  return (
    <section className="py-16 px-4 md:px-10 bg-gradient-to-b from-black/0 to-black/10">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
         Game Top Up
        </h1>
        <p className="text-gray-400 mt-2">
          Fast & secure game recharge services
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

        {/* Loading Skeleton */}
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-44 rounded-2xl bg-white/10 animate-pulse"
            />
          ))}

        {/* Empty State */}
        {!loading && topupProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-400 py-10">
            No top-up products available right now.
          </div>
        )}

        {/* Products */}
        {!loading &&
          topupProducts.map((product) => (
            <Link
              key={product._id}
              href={`/products/${product.slug}`}
              className="group relative rounded-2xl overflow-hidden
              bg-white/5 border border-white/10 backdrop-blur-xl
              hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl
              transition-all duration-300"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
              bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 transition" />

              {/* Image */}
              <div className="h-28 flex items-center justify-center p-3">
                <img
                  src={`http://localhost:3001/uploads/${product.photo}`}
                  alt={product.name}
                  className="max-h-full object-contain group-hover:scale-110 transition"
                />
              </div>

              {/* Name */}
              <div className="p-3 text-center">
                <h2 className="text-sm font-semibold text-white line-clamp-2">
                  {product.name}
                </h2>
              </div>
                 <div className="mt-2 text-center">
              {product.packageType?.length > 0 && (
                <p className="text-sm font-medium text-text/80">
                  {product.packageType.length === 1
                    ? `${product.packageType[0]?.price} TK`
                    : `${product.packageType[0]?.price} TK - ${product.packageType[product.packageType.length - 1]?.price} TK`}
                </p>
              )}
            </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Topup;