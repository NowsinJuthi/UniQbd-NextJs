import React from "react";
import { FaUser, FaBoxOpen, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

const EditAccount = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-black rounded-2xl shadow-2xl overflow-hidden">
        
        <div className="grid md:grid-cols-12">

          {/* Sidebar */}
          <div className="md:col-span-3 bg-gray-950 text-white p-8 border-r border-gray-800">
            <h2 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-3">
              My Account
            </h2>

            <div className="flex flex-col gap-3 text-sm">

              <Link href="/my-account">
                <div className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition cursor-pointer">
                  <FaUser /> Dashboard
                </div>
              </Link>

              <Link href="/my-account/orders">
                <div className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition cursor-pointer">
                  <FaBoxOpen /> Orders
                </div>
              </Link>

              <Link href="/my-account/address">
                <div className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition cursor-pointer">
                  <FaMapMarkerAlt /> Address
                </div>
              </Link>

              <Link href="/my-account/edit-account">
                <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg transition cursor-pointer">
                  <FaUser /> Account Details
                </div>
              </Link>

              <button className="flex items-center gap-3 bg-red-600 hover:bg-red-700 p-3 rounded-lg transition mt-6">
                <FaSignOutAlt /> Logout
              </button>

            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-9 p-10 text-gray-200">

            <h1 className="text-3xl font-bold mb-10">
              Account Details
            </h1>

            {/* Account Info */}
            <div className="space-y-6">

              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your mobile number..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-400">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Display Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <p className="text-sm text-gray-500 mt-2">
                  This name will appear in your account and reviews.
                </p>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 my-12"></div>

            {/* Password Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Password Change
              </h2>

              <div className="space-y-6">

                <div>
                  <label className="block text-sm mb-2 text-gray-400">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-400">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-400">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

              </div>
            </div>

            {/* Save Button */}
            <div className="mt-10">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition shadow-lg">
                Save Changes
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;