"use client";

import TiltCard from "@/app/components/TiltCard";
import { games } from "@/app/data/games";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductDetails = () => {
  const params = useParams();
  const slug = params.slug;

  const product = games.find((game) => game.slug === slug);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [gameID, setGameID] = useState("");


  if (!product) {
    return (
      <div className="text-center mt-20 text-2xl font-bold">
        Product Not Found
      </div>
    );
  }

  // Parse the price correctly and convert to number
  const price =
    selectedPackage?.price
      ? Number(selectedPackage.price.replace("TK", "").replace(",", "").trim())
      : 0;

  const subtotal = price * quantity;
  const total = subtotal;

  return (
    <section className="min-h-screen py-16 px-6">
      <div className="mx-10 grid md:grid-cols-2 gap-10">

        {/* Product Image */}
        <TiltCard key={product.id} product={product} />

        {/* Product Info */}
        <div>
          <h1 className="text-4xl text-button font-bold mb-6">
            {product.name}
          </h1>

          {/* Packages */}
          <h2 className="text-xl font-semibold mb-4 text-button">
            Select Package
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {product.packages.map((pack, index) => (
              <div
                key={index}
                onClick={() => setSelectedPackage(pack)}
                className={`relative overflow-hidden
   backdrop-blur-3xl transition-all duration-300 cursor-pointer
  flex flex-col items-center justify-center px-4 py-4 rounded-lg text-sm font-medium text-button
   shadow-lg shadow-button/20
  hover:-translate-y-0.5 hover:shadow-xl

  before:absolute before:top-0 before:left-0
  before:w-full before:h-[10px] 
  before:bg-gradient-to-b before:from-button before:to-transparent
  before:blur-lg before:opacity-80

  ${selectedPackage === pack ? "border-button bg-button/20 shadow-md" : ""}
`}
              >
                <h3 className="font-semibold text-lg text-button">{pack.uc}</h3>
                <p className="text-gray-500">{pack.price}</p>
              </div>
            ))}
          </div>

         {/* Quantity */}
<div className="mb-6 flex flex-col gap-2">
  <label className="block text-button font-semibold mb-1">
    Quantity
  </label>

  <div className="flex items-center gap-2">
    {/* Minus Button */}
    <button
      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
      className="w-10 h-10 flex items-center justify-center bg-button/10 text-button rounded-lg hover:bg-button/20 transition"
    >
      -
    </button>

    {/* Display Quantity */}
    <span className="w-20 text-center text-button border border-button/20 rounded-lg px-4 py-2">
      {quantity}
    </span>

    {/* Plus Button */}
    <button
      onClick={() => setQuantity((prev) => prev + 1)}
      className="w-10 h-10 flex items-center justify-center bg-button/10 text-button rounded-lg hover:bg-button/20 transition"
    >
      +
    </button>
  </div>
</div>

          {/* Game ID */}
          <div className="mb-6">
            <label className="block text-button font-semibold mb-2">
              Game ID
            </label>
            <input
              type="text"
              placeholder="Enter your Game ID"
              value={gameID}
              onChange={(e) => setGameID(e.target.value)}
              className="w-full border border-button/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button/60"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-button/5 backdrop-blur-3xl transition-all duration-300 px-4 py-4 my-10
           rounded-2xl border-button shadow-lg shadow-button/30">
            <h3 className="font-bold text-lg mb-4 text-button">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">{subtotal} TK</span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-bold text-lg text-button">{total} TK</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-button text-white rounded-lg shadow-lg transform transition active:translate-y-1 active:shadow-sm hover:scale-105">
              Buy Now
            </button>
            <button className="px-8 py-3 bg-button text-white rounded-lg shadow-lg transform transition active:translate-y-1 active:shadow-sm hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;