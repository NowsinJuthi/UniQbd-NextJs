import Link from "next/link";
import React from "react";
import { FaUser, FaBoxOpen, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";

const Account = () => {
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
                <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg cursor-pointer">
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
                <div className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition cursor-pointer">
                  <FaUser /> Account Details
                </div>
              </Link>

              <button className="flex items-center gap-3 bg-red-600 hover:bg-red-700 p-3 rounded-lg transition mt-6">
                <FaSignOutAlt /> Logout
              </button>

            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-9 p-10 text-gray-200">

            <h1 className="text-3xl font-bold mb-4">
              Hello, User 👋
            </h1>

            <p className="text-gray-400 leading-relaxed mb-10">
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your
              password and account details.
            </p>

            {/* Dashboard Cards */}
            <div className="grid sm:grid-cols-2 gap-6">

              <Link href="/my-account/orders">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-orange-500 hover:shadow-lg transition cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Orders
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Track, return or purchase items.
                  </p>
                </div>
              </Link>

              <Link href="/my-account/address">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-orange-500 hover:shadow-lg transition cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Addresses
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Edit your shipping & billing address.
                  </p>
                </div>
              </Link>

              <Link href="/my-account/edit-account">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-orange-500 hover:shadow-lg transition cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Account Details
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Change password & profile info.
                  </p>
                </div>
              </Link>

              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-red-500 hover:shadow-lg transition cursor-pointer">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Logout
                </h3>
                <p className="text-gray-400 text-sm">
                  Securely sign out of your account.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;