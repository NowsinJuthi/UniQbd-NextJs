"use client";

import Link from "next/link";
import React from "react";
import { FaUser, FaBoxOpen, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";
import { MenuPage } from "./menu/MenuPage";

const Account = () => {

  return (

    <div className="min-h-screen py-10 px-4">

      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-xl">

        <div className="grid md:grid-cols-12">

          {/* Sidebar */}

          <div className="md:col-span-3 bg-gradient-to-b from-imgcard to-background border-r border-white/10 p-6">

            {/* menu */}

             <MenuPage/>

          </div>


          {/* Content */}

          <div className="md:col-span-9 p-8 bg-gradient-to-br from-background via-imgcard to-background">

            <h1 className="text-3xl font-bold mb-2 text-text">
              Welcome back 👋
            </h1>

            <p className="text-text/70 mb-8 max-w-xl">
              Manage your orders, update your address, and edit your account details from here.
            </p>


            {/* dashboard cards */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">


              {/* Orders */}

              <Link href="/my-account/orders">

                <div className="group p-6 shadow-inner shadow-button/10 rounded-2xl border border-white/10 bg-gradient-to-br from-package/40 to-package/10 backdrop-blur-xl hover:border-button transition-all cursor-pointer">

                  <FaBoxOpen className="text-2xl mb-3 text-button group-hover:scale-110 transition"/>

                  <h3 className="text-lg font-semibold text-text">
                    Orders
                  </h3>

                  <p className="text-sm text-text/60 mt-1">
                    View and track your orders
                  </p>

                </div>

              </Link>



              {/* Address */}

              <Link href="/my-account/address">

                <div className="group p-6 shadow-inner shadow-button/10 rounded-2xl border border-white/10 bg-gradient-to-br from-package/40 to-package/10 backdrop-blur-xl hover:border-button transition-all cursor-pointer">

                  <FaMapMarkerAlt className="text-2xl mb-3 text-button group-hover:scale-110 transition"/>

                  <h3 className="text-lg font-semibold text-text">
                    Address
                  </h3>

                  <p className="text-sm text-text/60 mt-1">
                    Manage shipping address
                  </p>

                </div>

              </Link>



              {/* account */}

              <Link href="/my-account/edit-account">

                <div className="group p-6 shadow-inner shadow-button/10 rounded-2xl border border-white/10 bg-gradient-to-br from-package/40 to-package/10 backdrop-blur-xl hover:border-button transition-all cursor-pointer">

                  <FaUser className="text-2xl mb-3 text-button group-hover:scale-110 transition"/>

                  <h3 className="text-lg font-semibold text-text">
                    Account Details
                  </h3>

                  <p className="text-sm text-text/60 mt-1">
                    Update profile info
                  </p>

                </div>

              </Link>



              {/* logout */}

              <div className="group p-6 shadow-inner shadow-button/10 rounded-2xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition cursor-pointer">

                <FaSignOutAlt className="text-2xl mb-3 text-red-400 group-hover:scale-110 transition"/>

                <h3 className="text-lg font-semibold text-red-400">
                  Logout
                </h3>

                <p className="text-sm text-red-300/70 mt-1">
                  Secure sign out
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