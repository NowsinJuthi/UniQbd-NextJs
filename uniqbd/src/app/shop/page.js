"use client";

import React from "react";
import { allproducts } from "../data/allproducts";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-background">
      {/* Page Title */}
      <h1 className="text-center text-3xl font-bold text-text mb-12">
        Select Your Products
      </h1>

      {/* Products Grid */}
      <div className="mx-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {allproducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="bg-button/5 border border-button/10 rounded-xl p-1 shadow-md 
                       hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer flex flex-col items-center"
          >
            {/* Product Image */}
            <div className="mb-3 flex items-center justify-center w-full">
              <img
                src={product.img}
                alt={product.name}
                className=" object-contain"
              />
            </div>

            {/* Product Name */}
            <h2 className="text-sm font-semibold text-center text-button ">
              {product.name}
            </h2>

            {/* First and Last Package Preview */}
            {product.packages && product.packages.length > 0 && (
              <div className="mt-2 text-center space-y-1">
                
                {/* Last Package (if more than one) */}
                {product.packages.length > 1 && (
                  <p className="text-sm font-medium text-text/80">
                    {product.packages[0].price} -{" "}
                    {product.packages[product.packages.length - 1].price}
                  </p>
                )}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;