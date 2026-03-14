"use client";

import { games } from "@/app/data/games";
import Link from "next/link";
import React from "react";

const Topup = () => {
  return (
    <section className="py-14 px-6 ">
      <div className="">

        {/* Section Title */}
        <h1 className="text-4xl font-bold text-button text-center mb-10">
          Game Top Up
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
          {games.map((game) => (
            <div
              key={game.id}
              className="
                bg-black/8 backdrop-blur-lg rounded-2xl 
                shadow-[inset_0_0_10px_oklch(39.716%_0.06984_227.223_/0.925)]
                hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300 cursor-pointer p-4 flex flex-col items-center justify-center
              "
            >
              <img
                src={game.img}
                alt={game.name}
                className=" object-contain "
              />

              <h2 className="text-sm font-semibold text-center">
                {game.name}
              </h2>

              <Link href={`/products/${game.slug}`}>
                <button className="mt-4 px-14 py-2 text-sm font-medium bg-button text-white rounded-lg hover:bg-gray-800 transition">
                  Buy Now
                </button>
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Topup;