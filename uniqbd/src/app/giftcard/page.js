"use client";

import React from "react";
import { motion } from "framer-motion";
import { games } from "../data/games";
import Link from "next/link";
import { giftcard } from "../data/giftcard";

const Page = () => {
  return (
    <div className="min-h-screen px-6 py-14 bg-background">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text">
        Select Your Game
      </h1>

      {/* Games Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {giftcard.map((game) => (
          <Link key={game.id} href={`/products/${game.slug}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-button/5 border border-button/10 rounded-xl p-4 shadow-md 
                         hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center"
            >
              {/* Game Image */}
              <div className=" flex items-center justify-center mb-3">
                <img
                  src={game.img}
                  alt={game.name}
                  className="h-full object-contain"
                />
              </div>

              {/* Game Name */}
              <p className="text-center font-semibold text-sm text-button">
                {game.name}
              </p>

              {/* First and Last Package */}
              {game.packages && game.packages.length > 0 && (
                <div className="mt-2 text-center space-y-1">
                  
                  {game.packages.length > 1 && (
                    <p className="text-sm font-medium text-text/80">
                      {game.packages[0].price} -{" "}
                      {game.packages[game.packages.length - 1].price}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;