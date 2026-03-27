"use client";

import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } =
    useContext(CartContext);

  const changeQuantity = (index, delta) => {
    const newQty = cart[index].quantity + delta;
    updateQuantity(index, newQty);
  };

  const removeItem = (index) => {
    removeFromCart(index);
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-cover bg-center">
      <div
        className="max-w-6xl mx-auto 
      shadow-lg shadow-button/30 rounded-2xl p-8
      grid grid-cols-1 md:grid-cols-2 gap-10 bg-imgcard backdrop-blur-3xl"
      >
        {/* LEFT SIDE - BILLING DETAILS */}
        <div>
          <h1 className="text-2xl font-bold mb-6 border-b pb-3 text-text">
            Billing Details
          </h1>

          <div className="space-y-5">
            <div>
              <label className="block font-medium mb-1 text-text/80">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-button/20 bg-transparent
                rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-button
                transition"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-text/80">
                State / Country
              </label>
              <select
                className="w-full border border-button/20 bg-transparent
                rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-button"
              >
                <option>Select your location</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Rajshahi</option>
                <option>Sylhet</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1 text-text/80">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="01XXXXXXXXX"
                className="w-full border border-button/20 bg-transparent
                rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-button"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-text/80">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-button/20 bg-transparent
                rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-button"
              />
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-lg font-semibold mt-4 mb-2 text-text/80">
                Additional Information
              </h2>

              <textarea
                placeholder="Notes about your order"
                rows="3"
                className="w-full border border-button/20 bg-transparent
                rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-button"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="bg-button/5 p-6 rounded-xl shadow-lg shadow-button/30 backdrop-blur-3xl">
          <h1 className="text-2xl font-bold mb-6 border-b pb-3 text-text">
            Your Order
          </h1>

          {/* Product List */}
          <div className="space-y-4">
            {cart.map((product, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-5 items-center gap-2 bg-button/10 rounded-xl p-5 shadow-inner shadow-button/30"
              >
                {/* Product Info */}

                <img
                  src={product.img}
                  alt={product.name}
                  className="w-20 h-20 rounded-lg object-cover border border-button/20"
                />
                <div>
                  <h2 className="font-semibold text-text">{product.name}</h2>
                  <p className="text-sm text-gray-400">{product.package}</p>
                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-400 text-xs mt-1 hover:underline"
                  >
                    Remove
                  </button>
                </div>

                {/* Price */}
                <div className="text-text font-medium">{product.price} TK</div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => changeQuantity(index, -1)}
                    className="w-8 h-8 flex items-center justify-center bg-button text-white rounded-md hover:bg-button/40 transition"
                  >
                    −
                  </button>
                  <span className="text-text font-semibold">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => changeQuantity(index, 1)}
                    className="w-8 h-8 flex items-center justify-center bg-button text-white rounded-md hover:bg-button/40 transition"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <div className="font-semibold text-text">
                  {product.price * product.quantity} TK
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div
            className="mt-6 border-t pt-4 flex justify-between
          text-lg font-semibold text-text"
          >
            <span>Total</span>
            <span>{subtotal} </span>
          </div>

          {/* Payment Method */}
          <div className="mt-6 space-y-2">
            <h2 className="font-semibold text-text">Payment Method</h2>

            <label className="flex items-center gap-2 text-text/80">
              <input type="radio" name="payment" />
              bKash
            </label>

            <label className="flex items-center gap-2 text-text/80">
              <input type="radio" name="payment" />
              Nagad
            </label>

            <label className="flex items-center gap-2 text-text/80">
              <input type="radio" name="payment" />
              Rocket
            </label>
          </div>

          {/* Button */}
          <Link href="/my-account/orders">
            <button
              className="w-full mt-6 bg-button hover:bg-button/80
          shadow-xl hover:scale-105
          text-white py-3 rounded-lg font-semibold
          transition duration-300"
            >
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
