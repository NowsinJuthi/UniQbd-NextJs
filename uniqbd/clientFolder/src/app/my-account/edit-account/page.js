"use client";

import React from "react";
import { MenuPage } from "../menu/MenuPage";

const EditAccount = () => {
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-xl">
        <div className="grid md:grid-cols-12">
          {/* Sidebar */}
          <MenuPage />

          {/* Content */}

          <div className="md:col-span-9 p-8 bg-gradient-to-br from-background via-imgcard to-background">
            <h1 className="text-3xl font-bold text-text mb-6">
              Account Settings
            </h1>

            {/* Account form */}

            <div className="bg-gradient-to-br from-package/15 to-package/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-text mb-6">
                Profile Information
              </h2>

              <div className="space-y-5">
                {/* mobile */}

                <div>
                  <label className="text-sm text-text/70 block mb-2">
                    Mobile Number
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    className="w-full p-3 shadow-inner shadow-button/10 rounded-xl bg-button/10 border border-white/10 focus:border-button focus:ring-1 focus:ring-button outline-none transition"
                  />
                </div>

                {/* first last */}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-text/70 block mb-2">
                      First Name
                    </label>

                    <input
                      type="text"
                      className="w-full p-3 shadow-inner shadow-button/10 rounded-xl bg-button/10 border border-white/10 focus:border-button focus:ring-1 focus:ring-button outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="text-sm  text-text/70 block mb-2">
                      Last Name
                    </label>

                    <input
                      type="text"
                      className="w-full p-3 shadow-inner shadow-button/10 rounded-xl bg-button/10 border border-white/10 focus:border-button focus:ring-1 focus:ring-button outline-none transition"
                    />
                  </div>
                </div>

                {/* display */}

                <div>
                  <label className="text-sm text-text/70 block mb-2">
                    Display Name
                  </label>

                  <input
                    type="text"
                    className="w-full p-3 shadow-inner shadow-button/10 rounded-xl bg-button/10 border border-white/10 focus:border-button focus:ring-1 focus:ring-button outline-none transition"
                  />

                  <p className="text-xs opacity-60 mt-2">
                    This name will appear publicly in your account
                  </p>
                </div>

                {/* email */}

                <div>
                  <label className="text-sm text-text/70 block mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="w-full p-3 shadow-inner shadow-button/10 rounded-xl bg-button/10 border border-white/10 focus:border-button focus:ring-1 focus:ring-button outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* password */}

            <div className="bg-gradient-to-br from-package/15 to-package/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-8 shadow-lg">
              <h2 className="text-xl font-semibold text-text mb-6">
                Password Change
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="text-sm text-text/70 block mb-2">
                    Current Password
                  </label>

                  <input
                    type="password"
                    className="w-full p-3 shadow-inner shadow-button/10 rounded-xl bg-button/10 border border-white/10 focus:border-button focus:ring-1 focus:ring-button outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-text/70 block mb-2">
                    New Password
                  </label>

                  <input
                    type="password"
                    className="w-full p-3 shadow-inner shadow-button/10 rounded-xl bg-button/10 border border-white/10 focus:border-button focus:ring-1 focus:ring-button outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-text/70 block mb-2">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    className="w-full p-3 shadow-inner shadow-button/10 rounded-xl bg-button/10 border border-white/10 focus:border-button focus:ring-1 focus:ring-button outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* save */}

            <button className="mt-8 bg-button hover:scale-105 transition px-8 py-3 rounded-xl text-white shadow-lg shadow-button/40 font-medium">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
