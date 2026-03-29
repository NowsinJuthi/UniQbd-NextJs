"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [rating, setRating] = useState(0);

  const menuItems = [
    { name: "Description", key: "description" },
    { name: "Reviews", key: "reviews" },
    { name: "Shipping & Delivery", key: "shipping" },
  ];

  return (
    <div className="mt-16">

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 border-b border-white/10 pb-3 ">
        {menuItems.map((item) => {
          const isActive = activeTab === item.key;

          return (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className="relative px-6 py-3 text-sm font-medium transition  shadow-inner shadow-button/20 rounded-2xl"
            >
              <span
                className={`relative z-10 ${
                  isActive ? "text-white" : "text-text/60"
                }`}
              >
                {item.name}
              </span>

              {isActive && (
                <motion.div
                  layoutId="tabIndicator"
                  className="absolute inset-0 bg-button rounded-xl shadow-md shadow-button/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="mt-6 p-7 rounded-2xl border border-white/10 bg-gradient-to-br from-background via-imgcard to-background shadow-inner shadow-button/10 backdrop-blur-md">

        {/* Description */}
        {activeTab === "description" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-semibold text-text mb-4">
              Product Description
            </h2>

            <p className="text-text/70 leading-relaxed max-w-3xl">
              Enjoy fast and secure digital delivery. This product is ideal for
              gamers who want instant top-up services with reliable payment
              methods. We ensure safe transactions, quick processing, and
              24/7 customer support experience.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                Instant Delivery
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                Secure Payment
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                Trusted Gaming Service
              </div>

            </div>
          </motion.div>
        )}

        {/* Reviews */}
        {activeTab === "reviews" && (
          <div className="grid md:grid-cols-2 gap-8 ">

            {/* Reviews list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-2xl font-semibold text-text mb-1">
                Customer Reviews
              </h2>

              <p className="text-text/60 text-sm mb-6">
                Real feedback from verified customers
              </p>

              <div className="space-y-4">

                {[1, 2].map((review) => (
                  <div
                    key={review}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition shadow-inner shadow-button/20"
                  >

                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-text">
                        Nowsin Juthi
                      </span>

                      <span className="text-yellow-400">
                        ★★★★★
                      </span>
                    </div>

                    <p className="text-sm text-text/70">
                      Very fast delivery and trusted seller. Highly recommended!
                    </p>

                    <p className="text-xs text-text/40 mt-2">
                      March 28, 2026
                    </p>

                  </div>
                ))}

              </div>
            </motion.div>

            {/* Add review */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
            >

              <h3 className="text-xl font-semibold text-text mb-5">
                Write a Review
              </h3>

              {/* rating */}
              <div className="mb-5">

                <label className="block text-sm text-text/70 mb-2">
                  Rating
                </label>

                <div className="flex gap-2 text-2xl">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <span
                      key={star}
                      onClick={() => setRating(star)}
                      className={`cursor-pointer transition ${
                        rating >= star
                          ? "text-yellow-400 scale-110"
                          : "text-gray-500 hover:text-yellow-400"
                      }`}
                    >
                      ★
                    </span>

                  ))}

                </div>

              </div>

              {/* textarea */}
              <div className="mb-5">

                <label className="block text-sm text-text/70 mb-2">
                  Review
                </label>

                <textarea
                  rows={4}
                  placeholder="Share your experience..."
                  className="w-full shadow-inner shadow-button/20 p-3 rounded-lg bg-white/5 border border-white/10 text-text outline-none focus:ring-2 focus:ring-button resize-none"
                />

              </div>

              <button className="w-full py-3 rounded-xl bg-button text-white font-medium shadow-lg shadow-button/20 hover:scale-[1.02] transition">
                Submit Review
              </button>

            </motion.div>

          </div>
        )}

        {/* Shipping */}
        {activeTab === "shipping" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <h2 className="text-2xl font-semibold text-text mb-3">
              Shipping & Delivery
            </h2>

            <div className="space-y-3 text-text/70">

              <p>
                Instant delivery for digital products after payment
                confirmation.
              </p>

              <p>
                Average delivery time: 5–15 minutes.
              </p>

              <p>
                Safe & verified transaction process.
              </p>

            </div>

          </motion.div>
        )}

      </div>

    </div>
  );
};

export default ProductTabs;