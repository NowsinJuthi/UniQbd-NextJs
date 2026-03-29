"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // API call example
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);

    /*
    Example real API:

    await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    */
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-5">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-text mb-2">
          Forgot Password
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Enter your email to receive reset link
        </p>

        {/* Success Message */}
        {success ? (
          <div className="text-center">

            <div className="bg-green-500/10 border border-green-500 text-green-400 p-4 rounded-xl mb-5">
              Reset link sent to your email
            </div>

            <Link
              href="/login"
              className="text-button hover:underline"
            >
              Back to Login
            </Link>

          </div>
        ) : (

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div className="relative">

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full p-4 rounded-xl bg-box border-b-2 border-button outline-none text-text placeholder-transparent focus:border-button transition"
                placeholder="Email"
              />

              <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:top-4
                peer-placeholder-shown:text-base
                peer-focus:top-1
                peer-focus:text-sm
                peer-focus:text-button">

                Email Address

              </label>

              <FiMail className="absolute right-4 top-4 text-gray-400" />

            </div>

            {/* Button */}
            <Link href={'/opt'}
              type="submit"
              disabled={loading}
              className="w-full py-4 px-[155px] rounded-xl bg-button text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send OTP"}
            </Link>

          </form>

        )}

        {/* Footer */}
        <p className="text-gray-400 text-center mt-6">
          Remember password?{" "}
          <Link
            href="/dashboard/login"
            className="text-button hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default ForgotPassword;