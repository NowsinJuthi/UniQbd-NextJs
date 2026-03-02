import React from "react";
import { FaUser, FaBoxOpen, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

const Orders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        <div className="grid md:grid-cols-12">

          {/* Sidebar */}
          <div className="md:col-span-3 bg-black text-white p-8">
            <h2 className="text-2xl font-bold mb-8 border-b border-gray-600 pb-3">
              My Account
            </h2>

            <div className="flex flex-col gap-3 text-sm">

              <Link href="/my-account">
                <div className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition cursor-pointer">
                  <FaUser /> Dashboard
                </div>
              </Link>

              <Link href="/my-account/orders">
                <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg transition cursor-pointer">
                  <FaBoxOpen /> Orders
                </div>
              </Link>

              <Link href="/my-account/address">
                <div className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition cursor-pointer">
                  <FaMapMarkerAlt /> Address
                </div>
              </Link>

              <Link href="/my-account/edit-account">
                <div className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition cursor-pointer">
                  <FaUser /> Account Details
                </div>
              </Link>

              <button className="flex items-center gap-3 bg-red-600 hover:bg-red-700 p-3 rounded-lg transition mt-6">
                <FaSignOutAlt /> Logout
              </button>

            </div>
          </div>

          {/* Orders Content */}
          <div className="md:col-span-9 p-8 bg-black">

            <h1 className="text-3xl font-bold mb-8 text-gray-200">
              My Orders
            </h1>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">

                <thead>
                  <tr className="bg-black text-white text-sm">
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Total</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b hover:bg-gray-800 transition">
                    <td className="p-4 font-semibold text-gray-200">
                      #54564
                    </td>
                    <td className="p-4 text-gray-200">
                      August 31, 2026
                    </td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        Complete
                      </span>
                    </td>
                    <td className="p-4 font-medium text-gray-200">
                      250 TK
                    </td>
                    <td className="p-4 text-center">
                      <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition text-sm">
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