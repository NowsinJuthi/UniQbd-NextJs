import React from "react";
import Link from "next/link";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center 
     bg-cover bg-center bg-no-repeat">

      <div className="bg-white/10 backdrop-blur-md 
      shadow-[inset_0_0_10px_oklch(39.716%_0.06984_227.223_/0.925)]
      w-full max-w-xl rounded-[2%] shadow-2xl px-18 py-20">

        {/* Title */}
        <h1 className="text-3xl font-bold text-button text-center mb-2">
          Create Account
        </h1>
        <p className="text-center text-button mb-6 text-sm">
          Register to get started
        </p>

        {/* Name Field */}
        <div className="relative">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="peer p-4 rounded-2xl w-full outline-none border-b-3
            border-button focus:border-button text-gray-100 placeholder-transparent 
            shadow-lg bg-box transition"
          />
          <label
            className="absolute left-4 top-4 text-gray-400 text-sm pointer-events-none
            peer-focus:text-gray-300 peer-focus:text-sm peer-focus:-translate-y-3 transition-all
            peer-valid:text-button peer-valid:text-xs peer-valid:-translate-y-3"
          >
            Full Name
          </label>
        </div>

        {/* Email Field */}
        <div className="relative mt-4">
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="peer p-4 rounded-2xl w-full outline-none border-b-3
            border-button focus:border-button text-gray-100 placeholder-transparent 
            shadow-lg bg-box transition"
          />
          <label
            className="absolute left-4 top-4 text-gray-400 text-sm pointer-events-none
            peer-focus:text-gray-300 peer-focus:text-sm peer-focus:-translate-y-3 transition-all
            peer-valid:text-button peer-valid:text-xs peer-valid:-translate-y-3"
          >
            Email Address
          </label>
        </div>

        {/* Password Field */}
        <div className="relative mt-4">
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="peer p-4 rounded-2xl w-full outline-none border-b-3
            border-button focus:border-button text-gray-100 placeholder-transparent 
            shadow-lg bg-box transition"
          />
          <label
            className="absolute left-4 top-4 text-gray-400 text-sm pointer-events-none
            peer-focus:text-gray-300 peer-focus:text-sm peer-focus:-translate-y-3 transition-all
            peer-valid:text-button peer-valid:text-xs peer-valid:-translate-y-3"
          >
            Password
          </label>
        </div>

        {/* Register Button */}
        <button className="w-full mt-6 bg-button text-white py-3 rounded-lg font-semibold 
        hover:bg-button/90 transition duration-300 shadow-lg shadow-button-500/30">
          Register
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-button mt-6">
          Already have an account?{" "}
          <Link
            href="/dashboard/login"
            className="text-button font-medium hover:underline"
          >
            Log In
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegistrationPage;