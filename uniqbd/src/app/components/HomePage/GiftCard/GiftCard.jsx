"use client";

import { giftcard } from "@/app/data/giftcard";
import Link from "next/link";
import React from "react";

const GiftCard = () => {
  return (
    <section className="py-14 px-6">
      <h1 className="text-4xl font-bold text-button text-center mb-10">
        <span
          className="relative px-5 py-2 rounded-xl font-medium text-text 
            transition-all duration-300 
            hover:scale-105 group overflow-hidden"
        >
          Gift Card

          <span className="absolute inset-0 rounded-xl bg-button/15 blur-md transition duration-300"></span>

          <span className="absolute w-2 h-2 bg-button rounded-full animate-bounce top-2 left-3"></span>
          <span className="absolute w-1.5 h-1.5 bg-button rounded-full animate-bounce top-3 right-4 delay-100"></span>
          <span className="absolute w-1 h-1 bg-button rounded-full animate-bounce bottom-2 left-6 delay-200"></span>
        </span>
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {giftcard.map((game, index) => (
          <Link
            key={game.id}
            href={`/products/${game.slug}`}
            className={`relative group
              bg-imgcard backdrop-blur-lg transition-all duration-300 cursor-pointer
              flex flex-col items-center justify-center px-4 py-2 rounded-xl
              text-sm font-medium text-text hover:shadow-2xl hover:-translate-y-2
              border-button shadow-lg shadow-button/30
              ${index === 0 ? "col-span-2 row-span-2" : ""}`}
          >
            {/* Image */}
            <img
              src={game.img}
              alt={game.name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 rounded-xl"
            />
              <h2 className="text-sm font-semibold text-center mb-2">{game.name}</h2>

          </Link>
        ))}
      </div>




      
    </section>
  );
};

export default GiftCard;