"use client";

import React from "react";

const GiftCard = () => {
  const games = [
    { id: 1, name: "PUBG UC", img: "/images/uc.png" },
    { id: 2, name: "Free Fire Diamonds", img: "/images/diamond.png" },
    { id: 3, name: "COD Points", img: "/images/cp.png" },

  ];

  return (
    <section className="py-14 px-6 ">
      <div className="">

        {/* Section Title */}
        <h1 className="text-4xl font-bold text-button text-center mb-10">
          Gift Card
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

              <h2 className="text-sm font-semibold  text-center">
                {game.name}
              </h2>

              <button className="mt-4 px-14 py-2 text-sm font-medium bg-button text-white rounded-lg hover:bg-gray-800 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GiftCard;