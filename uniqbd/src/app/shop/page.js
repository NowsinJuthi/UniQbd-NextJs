import React from "react";
import { games } from "../data/games";

const Page = () => {
  return (
    <div className="min-h-screen px-6 py-12">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-10 text-button">
        Select Your Game
      </h1>

      {/* Games Grid */}
      <div className="mx-5 grid
      grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6
      gap-6">

        {games.map((game) => (
          <div
            key={game.id}
            className="bg-button/5 border border-button/10
            rounded-xl p-2 shadow-md
            hover:shadow-xl hover:-translate-y-1
            transition duration-300 cursor-pointer"
          >

            {/* Game Image */}
            <div className=" items-center justify-center mb-3">
              <img
                src={game.img}
                alt={game.name}
                className="h-full object-contain"
              />
            </div>

            {/* Game Name */}
            <h2 className="text-sm font-semibold text-center text-button">
              {game.name}
            </h2>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Page;