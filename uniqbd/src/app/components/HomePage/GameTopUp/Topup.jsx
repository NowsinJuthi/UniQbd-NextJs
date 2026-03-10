"use client";

import React from "react";

const Topup = () => {
  const games = [
    { id: 1, name: "PUBG UC", img: "/images/uc.png" },
    { id: 2, name: "Free Fire Diamonds", img: "/images/diamond.png" },
    { id: 3, name: "COD Points", img: "/images/cp.png" },
    { id: 4, name: "COD Points", img: "/images/cp.png" },
    { id: 5, name: "PUBG UC", img: "/images/uc.png" },
    { id: 6, name: "Free Fire Diamonds", img: "/images/diamond.png" },
  ];

  return (
    <section className="py-14 px-6">
      <div className="">

        {/* Section Title */}
        <h1 className="text-3xl font-bold text-center mb-10">
          Game Top Up
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {games.map((game) => (
            <div
              key={game.id}
              className=" bg-card rounded-2xl shadow-md hover:shadow-xl
               hover:-translate-y-2 transition-all duration-300 cursor-pointer p-2 flex flex-col items-center justify-center"
            >
              <img
                src={game.img}
                alt={game.name}
                className=" object-contain "
              />

              <h2 className="text-sm font-semibold text-gray-200 text-center">
                {game.name}
              </h2>

              <button className=" px-4 py-2 text-sm font-medium bg-button text-white rounded-lg hover:bg-gray-800 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Topup;