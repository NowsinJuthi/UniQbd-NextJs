"use client";

import { games } from "@/app/data/games";
import { giftcard } from "@/app/data/giftcard";
import Link from "next/link";
import React from "react";


const GiftCard = () => {


  return (
    <section className="py-14 px-6 ">
  
      <div className="">

        {/* Section Title */}
        <h1 className="text-4xl font-bold text-button text-center mb-10">
          <span
            href="/"
            className="relative px-5 py-2 rounded-xl font-medium text-button 
  transition-all duration-300 
  hover:scale-105 group overflow-hidden"
          >
            Gift Card

            <span className="absolute inset-0 rounded-xl bg-button/15 blur-md transition duration-300"></span>


            <span className="absolute w-2 h-2 bg-button rounded-full animate-bounce top-2 left-3"></span>
            <span className="absolute w-1.5 h-1.5 bg-button rounded-full  animate-bounce top-3 right-4 delay-100"></span>
            <span className="absolute w-1 h-1 bg-button rounded-full animate-bounce bottom-2 left-6 delay-200"></span>
          </span>
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

          {giftcard.map((game, index) => (
            <div
              key={game.id}
              className={`
         bg-button/5 backdrop-blur-lg transition-all duration-300 cursor-pointer p-4 flex flex-col items-center justify-center
    px-4 py-2 rounded-xl text-sm font-medium text-button 
  hover:shadow-2xl hover:-translate-y-2 border-button shadow-lg shadow-button/30

        ${index === 0 ? "col-span-2 row-span-2 " : ""}
      `}
            >
              {/* Image */}
              <img
                src={game.img}
                alt={game.name}
                className="w-full h-full object-contain transition duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <h2 className="text-sm font-semibold text-white">
                  {game.name}
                </h2>

                <Link href={`/products/${game.slug}`}>
                  <button className="mt-2 px-4 py-2 text-xs bg-button rounded-md">
                    Buy Now
                  </button>
                </Link>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default GiftCard;