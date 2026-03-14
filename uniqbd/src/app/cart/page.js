import React from "react";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="min-h-screen 
    bg-cover bg-center py-16 px-4">

      {/* Container */}
      <div className="max-w-6xl mx-auto bg-button/5 backdrop-blur-md 
      border border-button/40 rounded-2xl shadow-2xl p-8">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-10 text-button">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* Header */}
            <div className="hidden md:grid grid-cols-4 text-button/90 font-semibold border-b border-button pb-4">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>

            {/* Product Card */}
            <div className="grid grid-cols-1 md:grid-cols-4 items-center 
            gap-4 bg-button/20 rounded-xl p-5 border border-button/30">

              {/* Product */}
              <div className="flex items-center gap-4">

                <img
                  src="/images/uc.png"
                  alt="product"
                  className="w-20 h-20 rounded-lg object-cover border border-button/20"
                />

                <div>
                  <h2 className="font-semibold text-button">
                    PUBG Mobile UC
                  </h2>

                  <p className="text-sm text-gray-400">
                    UniQbd
                  </p>

                  <button className="text-red-400 text-xs mt-1 hover:underline">
                    Remove
                  </button>
                </div>

              </div>

              {/* Price */}
              <div className="text-gray-300 font-medium">
                ৳1500
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">

                <button className="w-8 h-8 flex items-center justify-center 
                bg-button text-white rounded-md hover:bg-button/40 transition">
                  −
                </button>

                <span className="text-button font-semibold">
                  1
                </span>

                <button className="w-8 h-8 flex items-center justify-center 
                bg-button text-white rounded-md hover:bg-button/40 transition">
                  +
                </button>

              </div>

              {/* Subtotal */}
              <div className="font-semibold text-button">
                ৳1500
              </div>

            </div>

            {/* Update Cart */}
            <button className="bg-button text-white px-6 py-3 rounded-xl 
            hover:bg-button/40 transition shadow-lg shadow-button/40">
              Update Cart
            </button>

          </div>


          {/* RIGHT SIDE */}
          <div className="bg-button/10 border border-button/40 
          p-6 rounded-2xl shadow-xl h-fit">

            <h2 className="text-2xl font-bold mb-6 text-button">
              Cart Totals
            </h2>

            <div className="flex justify-between mb-4 text-button/60">
              <span>Subtotal</span>
              <span>৳1500</span>
            </div>

            <div className="border-t border-button/40 pt-4 
            flex justify-between font-semibold text-lg text-button/60">
              <span>Total</span>
              <span>৳1500</span>
            </div>

            <Link href="/checkout">

              <button className="mt-6 w-full bg-button text-white 
              py-3 rounded-xl hover:bg-button/40 transition 
              shadow-lg shadow-button/40">

                Proceed To Checkout

              </button>

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;