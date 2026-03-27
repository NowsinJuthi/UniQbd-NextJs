"use client";

import TiltCard from "@/app/components/TiltCard";
import { games } from "@/app/data/games";
import { giftcard } from "@/app/data/giftcard";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";

const ProductDetails = () => {
  const params = useParams();
  const slug = params.slug;

  // Find product
  const product =
    games.find((game) => game.slug === slug) ||
    giftcard.find((gc) => gc.slug === slug);

  if (!product) {
    return (
      <div className="text-center mt-20 text-2xl font-bold">
        Product Not Found
      </div>
    );
  }

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [gameID, setGameID] = useState("");

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      product,
      selectedPkg: selectedPackage,
      playerId: gameID,
      quantity,
    });
  };

  const price =
    selectedPackage?.price || product.price
      ? Number(
          (selectedPackage?.price || product.price)
            .replace("TK", "")
            .replace(",", "")
            .trim(),
        )
      : 0;

  const subtotal = price * quantity;

  return (
    <section className="min-h-screen py-16 px-6">
      <div className="mx-10 grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <TiltCard key={product.id} product={product} />

        {/* Product Info */}
        <div>
          <h1 className="text-text text-4xl font-bold mb-6">{product.name}</h1>

          {/* Game Packages */}
          {product.packages && product.packages.length > 0 && (
            <>
              <h2 className="text-text text-xl font-semibold mb-4">
                Select Package
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {product.packages.map((pack, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPackage(pack)}
                    className={`package relative group cursor-pointer
                      transform-gpu transition-all duration-500
                      hover:-translate-y-1 hover:scale-[1.03]
                      active:scale-[0.97] 
                      flex flex-col items-center justify-center
                      py-3 rounded-md text-sm font-semibold text-text
                      bg-gradient-to-br from-package/40 via-package/10 to-transparent
                      backdrop-blur-3xl border border-white/10
                      ${
                        selectedPackage === pack
                          ? "-translate-y-1 scale-[1.05] shadow"
                          : "shadow-md hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                      }`}
                  >
                    <span className="text-lg font-bold tracking-wide">
                      {pack.price}
                    </span>
                    <span className="text-xs opacity-70 mt-1">{pack.uc}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Quantity */}
          <div className="mb-6 flex flex-col gap-2">
            <label className="block text-text font-semibold mb-1">
              Quantity
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-10 h-10 flex text-text items-center justify-center bg-button/10 shadow-lg shadow-button/20 rounded-lg hover:bg-button/20 transition"
              >
                -
              </button>
              <span className="relative w-20 text-center text-text font-semibold px-4 py-2 rounded-xl bg-button/10 backdrop-blur-xl shadow-lg shadow-button/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-button/30">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-10 h-10 text-text flex items-center justify-center bg-button/10 shadow-lg shadow-button/20 rounded-lg hover:bg-button/20 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Game ID for Top-Up */}
          {product.category === "top-up" && (
            <div className="mb-8">
              <label className="block font-semibold mb-2 text-text">
                Game ID
              </label>
              <input
                type="text"
                value={gameID}
                onChange={(e) => setGameID(e.target.value)}
                placeholder="Enter Player ID"
                className="w-full px-4 py-3 rounded-xl bg-imgcard border
                 border-white/10 focus:border-button outline-none shadow-inner"
              />
            </div>
          )}

          {/* Order Summary */}
          <div
            className="bg-imgcard backdrop-blur-3xl transition-all duration-300 px-4 py-4 my-10
           rounded-2xl border-button shadow-inner shadow-button/10"
          >
            <h3 className="font-bold text-text text-lg mb-4 ">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">{subtotal} TK</span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span className="font-semibold text-text text-lg">Total</span>
              <span className="font-bold text-lg text-button">
                {subtotal} TK
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link href={"/checkout"}>
              <button onClick={handleAddToCart} className="px-8 py-3 bg-button text-white rounded-lg shadow-lg transform transition active:translate-y-1 active:shadow-sm hover:scale-105">
                Buy Now
              </button>
            </Link>

            <button
              onClick={handleAddToCart}
              className="px-8 py-3 bg-button text-white rounded-lg shadow-lg transform transition active:translate-y-1 active:shadow-sm hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
