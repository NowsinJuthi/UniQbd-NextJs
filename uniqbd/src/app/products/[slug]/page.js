"use client";

import { games } from "@/app/data/games";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductDetails = () => {
  const params = useParams();
  const slug = params.slug;

  const product = games.find((game) => game.slug === slug);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center mt-20 text-2xl font-bold">
        Product Not Found
      </div>
    );
  }

  const price =
    selectedPackage?.price?.replace("৳", "") || 0;

  const subtotal = price * quantity;
  const total = subtotal;

  return (
    <section className="min-h-screen py-16 px-6">
      <div className="mx-10 grid md:grid-cols-2 gap-10">

        {/* Product Image */}
        <div className="bg-button/20 rounded-2xl p-10 shadow-[_0_0_10px_oklch(39.716%_0.06984_227.223_/0.925)]
                hover:shadow-2xl hover:-translate-y-2 transition flex justify-center items-center">
          <img
            src={product.img}
            alt={product.name}
            className=" object-contain"
          />
        </div>

        {/* Product Info */}
        <div>

          <h1 className="text-4xl text-button font-bold mb-6">
            {product.name}
          </h1>

          {/* Game ID */}
          <div className="mb-6">
            <label className="block text-button font-semibold mb-2">
              Game ID
            </label>

            <input
              type="text"
              placeholder="Enter your Game ID"
              className="w-full border border-button/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button/60"
            />
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-button font-semibold mb-2">
              Quantity
            </label>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-32 text-button border border-button/20 rounded-lg px-4 py-2"
            />
          </div>

          {/* Packages */}
          <h2 className="text-xl font-semibold mb-4 text-button">
            Select Package
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">

            {product.packages.map((pack, index) => (

              <div
                key={index}
                onClick={() => setSelectedPackage(pack)}
                className={`cursor-pointer p-4 rounded-xl border text-center transition
                ${
                  selectedPackage === pack
                    ? "border-button bg-button/20 shadow-md"
                    : "border-gray-200 hover:shadow-md"
                }`}
              >

                <h3 className="font-semibold text-lg text-button">
                  {pack.uc}
                </h3>

                <p className="text-gray-500">{pack.price}</p>

              </div>

            ))}

          </div>

          {/* Order Summary */}
          <div className="bg-button/30 rounded-xl p-6 shadow-md mb-6 border border-button/30">

            <h3 className="font-bold text-lg mb-4 text-button">
              Order Summary
            </h3>

            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">৳{subtotal}</span>
            </div>

            <div className="flex justify-between border-t pt-3">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-bold text-lg text-button">
                ৳{total}
              </span>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            <button className="px-8 py-3 bg-button text-white rounded-lg hover:scale-105 transition shadow-md">
              Buy Now
            </button>

            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition shadow-md">
              Add to Cart
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;