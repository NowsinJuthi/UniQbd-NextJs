import React from "react";
import {
  FaUser,
  FaBoxOpen,
  FaSignOutAlt,
  FaChartLine,
  FaComments,
} from "react-icons/fa";
import Link from "next/link";
import { AdminMenuPage } from "../Menu/page";

const Review = () => {
  return (
    <div className="grid grid-cols-12 gap-6 p-6">
      <div className="md:col-span-3 p-8 border-r bg-button/5">
        <AdminMenuPage />
      </div>

      <div className="col-span-12 md:col-span-9">
        <h1 className="text-3xl font-bold mb-8">Customer Reviews</h1>

        {/* Review Card */}
        <div className="bg-button/5 rounded-2xl p-6 space-y-6 shadow-lg shadow-button/20">
          {/* Single Review */}
          <div
            className="bg-button/5 p-5 rounded-xl
               flex justify-between items-start shadow-lg shadow-button/20"
          >
            <div>
              <h3 className="text-lg font-semibold">Name: Nowsin</h3>
              <p className=" mt-2">Review: Good Product & Fast Delivery</p>
              <p className="text-gray-400 text-sm mt-2">24 Feb 2026</p>
            </div>

            <button className="bg-button hover:bg-button/70 text-white px-4 py-2 rounded-lg text-sm transition">
              Edit
            </button>
          </div>

          {/* You can duplicate this for multiple reviews */}
        </div>
      </div>
    </div>
  );
};

export default Review;
