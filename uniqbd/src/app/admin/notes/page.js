import React from "react";
import { FaUser, FaBoxOpen, FaSignOutAlt, FaChartLine, FaComments } from "react-icons/fa";
import Link from "next/link";

const Note = () => {
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
                { href: "/admin/notes", text: "Add Note", icon: <FaComments />, active: true },
                { href: "/admin/reviews", text: "Reviews", icon: <FaComments /> },
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

          {/* ================= Content Area ================= */}
          <div className="md:col-span-9 p-10 text-white">

            <h1 className="text-3xl font-bold mb-8">
               Add & Manage Notes
            </h1>

            {/* ===== Add Note Card ===== */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-8">

              <h3 className="text-lg font-semibold mb-4 text-gray-300">
                Add New Note
              </h3>

              <input
                type="text"
                placeholder="Write your note..."
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
              />

              <button className="mt-4 bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-xl font-semibold transition">
                Save Note
              </button>

            </div>

            {/* ===== Notes List ===== */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">

              <h3 className="text-lg font-semibold mb-4 text-gray-300">
                All Notes
              </h3>

              <div className="space-y-3">

                <div className="bg-gray-800 px-4 py-3 rounded-xl flex justify-between items-center">
                  <p>Update product price tomorrow</p>
                  <button className="text-orange-400 hover:text-red-500 transition">
                    Edit
                  </button>
                </div>

                <div className="bg-gray-800 px-4 py-3 rounded-xl flex justify-between items-center">
                  <p>Check pending orders</p>
                  <button className="text-orange-400 hover:text-red-500 transition">
                    Edit
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Note;