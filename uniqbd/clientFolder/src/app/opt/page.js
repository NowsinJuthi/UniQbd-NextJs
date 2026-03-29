"use client";

import React, { useRef, useState } from "react";

const OTPPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move next input
    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // backspace → go previous
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("OTP:", code);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-button/5 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 p-8 rounded-3xl w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-text text-center">
          Verify OTP
        </h2>

        <p className="text-gray-400 text-sm text-center mt-2">
          Enter the 6 digit code sent to your email
        </p>
        <p className="text-gray-400 text-sm text-center mt-2">
          OPT send to <span className="text-text">nowsin@gmail.com</span>
        </p>
        {/* OTP inputs */}
        <div className="flex justify-between mt-8 gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-14 text-center text-lg rounded-xl
              bg-imgcard border-b-2 border-button outline-none
              text-text shadow-md focus:border-blue-400"
            />
          ))}
        </div>

        {/* button */}
        <button
          type="submit"
          className="w-full mt-8 p-4 rounded-2xl bg-button
          text-white font-medium shadow-lg shadow-button/40
          hover:scale-[1.02] transition"
        >
          Verify Code
        </button>

        {/* resend */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Didn't receive code?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Resend OTP
          </span>
        </p>
      </form>
    </div>
  );
};

export default OTPPage;
