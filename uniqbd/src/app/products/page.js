"use client";

import React from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = React.useState("description");

  const menuItems = [
    { name: "Description", key: "description" },
    { name: "Reviews", key: "reviews" },
    { name: "Shipping & Delivery", key: "shipping" },
  ];

  return (
    <div className="mt-14">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-2">
        {menuItems.map((item) => {
          const isActive = activeTab === item.key;

          return (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`px-6 py-2 rounded-t-xl text-sm font-medium transition

              ${
                isActive
                  ? "bg-button text-white shadow-md shadow-button/30"
                  : "text-text/70 hover:text-text hover:bg-white/5"
              }

              `}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="p-6 rounded-b-xl border border-white/10 bg-gradient-to-br from-background via-imgcard to-background shadow-inner shadow-button/20">
        {activeTab === "description" && (
          <div>
            <h2 className="text-xl font-semibold text-text mb-3">
              Product Description
            </h2>

            <p className="text-text/80 text-sm leading-relaxed">
              This product provides high quality service and reliability.
              Perfect for gaming top-up, fast delivery and secure payment
              system.
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT SIDE — Reviews list */}
            <div>
              <h2 className="text-xl font-semibold text-text mb-2">
                Customer Reviews
              </h2>

              <p className="text-text/70 text-sm mb-6">
                See what other customers are saying about this product.
              </p>

              {/* review card */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl shadow-inner shadow-button/20 p-3 border border-white/10 bg-white/5 hover:bg-white/10 transition">
                  <div className="flex items-center justify-between mb-1 ">
                    <span className="text-sm font-semibold text-text">
                      Nowsin Juthi
                    </span>

                    <span className="text-yellow-400 text-sm tracking-wide">
                      ★★★★★
                    </span>
                  </div>

                  <p className="text-text/80 text-sm leading-relaxed">
                    Very fast delivery and trusted seller. Highly recommended!
                  </p>

                  <p className="text-xs text-text/50 mt-2">March 28, 2026</p>
                </div>

                <div className="p-4 rounded-xl shadow-inner shadow-button/20 border border-white/10 bg-white/5 hover:bg-white/10 transition">
                  <div className="flex items-center justify-between mb-1 ">
                    <span className="text-sm font-semibold text-text">
                      Nowsin Juthi
                    </span>

                    <span className="text-yellow-400 text-sm tracking-wide">
                      ★★★★★
                    </span>
                  </div>

                  <p className="text-text/80 text-sm leading-relaxed">
                    Very fast delivery and trusted seller. Highly recommended!
                  </p>

                  <p className="text-xs text-text/50 mt-2">March 28, 2026</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — Add review */}
            <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-background via-imgcard to-background shadow-inner shadow-button/20">
              <h3 className="text-lg font-semibold text-text mb-5">
                Write a Review
              </h3>

              {/* rating */}
              <div className="mb-5">
                <label className="block text-sm text-text/80 mb-2">
                  Your Rating
                </label>

                <div className="flex gap-2 text-2xl cursor-pointer">
                  <span className="text-gray-400 hover:text-yellow-400 transition">
                    ★
                  </span>
                  <span className="text-gray-400 hover:text-yellow-400 transition">
                    ★
                  </span>
                  <span className="text-gray-400 hover:text-yellow-400 transition">
                    ★
                  </span>
                  <span className="text-gray-400 hover:text-yellow-400 transition">
                    ★
                  </span>
                  <span className="text-gray-400 hover:text-yellow-400 transition">
                    ★
                  </span>
                </div>
              </div>

              {/* textarea */}
              <div className="mb-5">
                <label className="block text-sm text-text/80 mb-2">
                  Your Review
                </label>

                <textarea
                  placeholder="Share your experience with this product..."
                  className="w-full shadow-inner  p-3 rounded-lg bg-white/5 border border-white/10 text-text outline-none focus:ring-2 focus:ring-button resize-none placeholder:text-text/40"
                  rows={4}
                />
              </div>

              {/* submit */}
              <button className="p-2.5 rounded-lg bg-button text-white font-medium hover:opacity-90 transition shadow-md shadow-button/20">
                Submit Review
              </button>
            </div>
          </div>
        )}
        {activeTab === "shipping" && (
          <div>
            <h2 className="text-xl font-semibold text-text mb-3">
              Shipping & Delivery
            </h2>

            <p className="text-text/80 text-sm">
              Delivery usually completed within 5-15 minutes after payment
              confirmation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
