import React from "react";
import Link from "next/link";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">

      <div className="bg-gray-950/80 backdrop-blur-md border border-gray-700 w-full max-w-md rounded-2xl shadow-2xl p-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-400 mb-6 text-sm">
          Register to get started
        </p>

        {/* Name Field */}
        <div className="mb-5">
          <label className="block text-gray-300 mb-2 font-medium">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
          />
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <label className="block text-gray-300 mb-2 font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
          />
        </div>

        {/* Register Button */}
        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-lg shadow-orange-500/30">
          Register
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/dashboard/login"
            className="text-orange-500 font-medium hover:underline"
          >
            Log In
          </Link>
        </p>

      </div>

    </div>
  );
};

export default RegistrationPage;