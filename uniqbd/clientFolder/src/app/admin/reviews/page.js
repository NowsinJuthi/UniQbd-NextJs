import React from "react";
import { FaUser, FaBoxOpen, FaSignOutAlt, FaChartLine, FaComments } from "react-icons/fa";
import Link from "next/link";

const Review = () => {
  return (
    <div className="min-h-screen p-6 text-button">
      <div className="max-w-7xl mx-auto bg-button/5 rounded-3xl shadow-lg shadow-button/30 overflow-hidden">
        <div className="grid md:grid-cols-12">

          {/* ================= Sidebar ================= */}
        <div className="md:col-span-3 p-8 border-r bg-button/5">

            <h2 className="text-2xl font-bold mb-10 tracking-wide">
            Admin Panel
            </h2>

            <div className="flex flex-col gap-3 text-sm">

              {[
                { href: "/admin", text: "Dashboard", icon: <FaChartLine /> },
                { href: "/admin/orders", text: "Orders", icon: <FaBoxOpen /> },
                { href: "/admin/products", text: "Add Products", icon: <FaUser />},
                { href: "/admin/notes", text: "Add Note", icon: <FaComments /> },
                { href: "/admin/reviews", text: "Reviews", icon: <FaComments /> , active: true },
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300
                    ${item.active
                        ? "bg-button text-white shadow-lg"
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
          <div className="md:col-span-9 p-10">

            <h1 className="text-3xl font-bold mb-8">
               Customer Reviews
            </h1>

            {/* Review Card */}
            <div className="bg-button/5 rounded-2xl p-6 space-y-6 shadow-lg shadow-button/20">

              {/* Single Review */}
              <div className="bg-button/5 p-5 rounded-xl
               flex justify-between items-start shadow-lg shadow-button/20">
                <div>
                  <h3 className="text-lg font-semibold">Name: Nowsin</h3>
                  <p className=" mt-2">
                    Review: Good Product & Fast Delivery
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    24 Feb 2026
                  </p>
                </div>

                <button className="bg-button hover:bg-button/70 text-white px-4 py-2 rounded-lg text-sm transition">
                 Edit
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