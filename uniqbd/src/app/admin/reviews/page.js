import React from "react";
import { FaUser, FaBoxOpen, FaSignOutAlt, FaChartLine, FaComments } from "react-icons/fa";
import Link from "next/link";

const Review = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] p-6">
      <div className="max-w-7xl mx-auto bg-[#111827] rounded-3xl shadow-2xl border border-gray-800 overflow-hidden">
        <div className="grid md:grid-cols-12">

          {/* ================= Sidebar ================= */}
          <div className="md:col-span-3 bg-[#0b1120] text-white p-8 border-r border-gray-800">

            <h2 className="text-2xl font-bold mb-10 tracking-wide">
              Admin Panel
            </h2>

            <div className="flex flex-col gap-3 text-sm">

              {[
                { href: "/admin", text: "Dashboard", icon: <FaChartLine /> },
                { href: "/admin/orders", text: "Orders", icon: <FaBoxOpen /> },
                { href: "/admin/products", text: "Add Products", icon: <FaUser /> },
                { href: "/admin/notes", text: "Add Note", icon: <FaComments /> },
                { href: "/admin/reviews", text: "Reviews", icon: <FaComments />, active: true },
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300
                    ${
                      item.active
                        ? "bg-orange-500 text-white shadow-lg"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    {item.icon}
                    {item.text}
                  </div>
                </Link>
              ))}

              <button className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 px-4 py-3 rounded-xl mt-6 transition-all duration-300">
                <FaSignOutAlt /> Logout
              </button>

            </div>
          </div>

          {/* ================= Reviews Content ================= */}
          <div className="md:col-span-9 p-10 text-white">

            <h1 className="text-3xl font-bold mb-8">
               Customer Reviews
            </h1>

            {/* Review Card */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 space-y-6">

              {/* Single Review */}
              <div className="bg-gray-800 p-5 rounded-xl flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Name: Nowsin</h3>
                  <p className="text-gray-300 mt-2">
                    Review: Good Product & Fast Delivery
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    24 Feb 2026
                  </p>
                </div>

                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm transition">
                  ✏ Edit
                </button>
              </div>

              {/* You can duplicate this for multiple reviews */}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Review;