import React from 'react'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center
     justify-center  bg-cover bg-center bg-no-repeat">

      <div className="bg-white/10 backdrop-blur-md
       shadow-[inset_0_0_10px_oklch(39.716%_0.06984_227.223_/0.925)]
       w-full max-w-xl rounded-[2%] px-18 py-20">

        {/* Title */}
        <h1 className="text-3xl font-bold text-button text-center  mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-button mb-6 text-sm">
          Login to continue
        </p>

        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            name="email"
            required
            className="peer p-4 rounded-2xl w-full outline-none border-b-3
             border-button focus:border-button text-gray-100 placeholder-transparent shadow-lg bg-box  transition"
            placeholder="Email Address"
          />
          <label
            className="absolute left-4 top-4 text-gray-400 text-sm pointer-events-none
                 peer-focus:text-gray-300 peer-focus:text-sm peer-focus:-translate-y-3 transition-all
                 peer-valid:text-butt peer-valid:text-xs peer-valid:-translate-y-3"
          >
            Email Address
          </label>
        </div>

        {/* Password Field */}
        <div className="relative">
          <input
            type="email"
            name="email"
            required
            className="peer mt-4 p-4 rounded-2xl w-full outline-none border-b-3
             border-button focus:border-button text-gray-100 placeholder-transparent shadow-lg bg-box transition"
            placeholder="Email Address"
          />
          <label
            className="absolute left-4 top-8 text-gray-400 text-sm pointer-events-none
                 peer-focus:text-gray-300 peer-focus:text-sm peer-focus:-translate-y-3 transition-all
                 peer-valid:text-butt peer-valid:text-xs peer-valid:-translate-y-3"
          >
            Password
          </label>
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-6">
          <Link href="/forgot-password" className="text-sm text-gray-100 hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button className="w-full bg-button text-white py-3 rounded-lg font-semibold hover:bg-button/90 transition duration-300 shadow-lg shadow-button-500/30">
          Log In
        </button>

        {/* Extra Links */}
        <p className="text-center text-sm text-button mt-6">
          Don't have an account?{" "}
          <Link href="/dashboard/registration" className="text-button font-medium hover:underline">
            Register
          </Link>
        </p>

      </div>

    </div>
  )
}

export default LoginPage