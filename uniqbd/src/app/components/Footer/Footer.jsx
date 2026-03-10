"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-card pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Address */}
        <div>
          <h2 className=" text-lg font-semibold mb-4">UniQbd</h2>
          <p className="text-sm leading-6">
           Razabari, Turag, Dhaka 1711<br />
            Email: support@uniqbd.com <br />
            Phone: +880 1XXXXXXXXX
          </p>
        </div>

        {/* Our Store */}
        <div>
          <h2 className=" text-lg font-semibold mb-4">Our Store</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Game Top Up</li>
            <li className="hover:text-white cursor-pointer transition">Gift Cards</li>
            <li className="hover:text-white cursor-pointer transition">Software</li>
            <li className="hover:text-white cursor-pointer transition">Offers</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className=" text-lg font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">About Us</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className=" text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <div className="bg-button p-3 rounded-full hover:bg-blue-600 transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-button p-3 rounded-full hover:bg-pink-600 transition cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-button p-3 rounded-full hover:bg-red-600 transition cursor-pointer">
              <FaYoutube />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} UniQbd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;