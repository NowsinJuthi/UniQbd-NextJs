import React from "react";
import { FaUser, FaBoxOpen, FaSignOutAlt, FaChartLine, FaComments } from "react-icons/fa";
import Link from "next/link";

const Orders = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  p-6">
      <div className="max-w-7xl mx-auto bg-[#111827] rounded-3xl shadow-2xl overflow-hidden border border-gray-800">
        <div className="grid md:grid-cols-12">

          {/* ================= Sidebar ================= */}
          <div className="md:col-span-3 bg-[#0b1120] text-white p-8 border-r border-gray-800">

            <h2 className="text-2xl font-bold mb-10 tracking-wide">
            Admin Panel
            </h2>

            <div className="flex flex-col gap-3 text-sm">

              {[
                { href: "/admin", text: "Dashboard", icon: <FaChartLine /> },
                { href: "/admin/orders", text: "Orders", icon: <FaBoxOpen />, active: true },
                { href: "/admin/products", text: "Add Products", icon: <FaUser /> },
                { href: "/admin/notes", text: "Add Note", icon: <FaComments /> },
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

          {/* ================= Orders Content ================= */}
          <div className="md:col-span-9 p-10 text-white">

            <h1 className="text-3xl font-bold mb-8">
               Customer Orders
            </h1>

            <div className="overflow-x-auto rounded-2xl border border-gray-700">

              <table className="w-full text-left">

                <thead>
                  <tr className="bg-gray-800 text-gray-300 text-sm">
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Total</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t border-gray-800 hover:bg-gray-800 transition">
                    <td className="p-4 font-semibold">#54564</td>
                    <td className="p-4 text-gray-300">August 31, 2026</td>

                    <td className="p-4">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                        Completed
                      </span>
                    </td>

                    <td className="p-4 font-medium">250 TK</td>

                    <td className="p-4 text-center">
                      <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm transition">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>

              </table>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Orders;