import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">

      {/* Header Section */}
      <div className="bg-gray-900 border-b border-gray-800 py-16 text-center px-5">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">
          UniQbd
        </h1>

        <h2 className="text-2xl font-semibold mb-4 text-white">
          CONTACT US
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400">
          SMS To Our Facebook Page Without Calling To Get Fast Service Or Get Your Product Delivered.
        </p>

        <p className="max-w-3xl mx-auto text-gray-400 mt-2">
          দ্রুত পরিষেবা পেতে অথবা আপনার পণ্য দ্রুত ডেলিভারি পেতে কল না করে আমাদের ফেসবুক পেজে এসএমএস করুন।
        </p>

        <p className="max-w-3xl mx-auto text-red-400 mt-2">
          WhatsApp Call Support Available NO — Only SMS Support.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="bg-gray-900 px-5 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Address */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-orange-500  hover:shadow-lg hover:shadow-purple-500/20 transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-orange-500">
            📍 Address
          </h3>
          <p className="text-gray-400 text-sm">
            Razabari, Turag, Dhaka-1711 <br />
            House 13, Road 01, Block B, Ward 54
          </p>
        </div>

        {/* Phone */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-orange-500  hover:shadow-lg hover:shadow-purple-500/20 transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-orange-500">
            📞 Support
          </h3>
          <p className="text-gray-400 text-sm">01777139777</p>
          <p className="text-gray-400 text-sm">01977712177</p>
          <p className="text-gray-500 text-sm mt-2">
            WhatsApp SMS: 01777139777
          </p>
        </div>

        {/* Email */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-orange-500  hover:shadow-lg hover:shadow-purple-500/20 transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-orange-500">
            📧 Email
          </h3>
          <p className="text-gray-400 text-sm">support@uniqbd.com</p>
          <p className="text-gray-400 text-sm">info@uniqbd.com</p>
        </div>

        {/* Social */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-orange-500  hover:shadow-lg hover:shadow-purple-500/20 transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-orange-500">
            🌐 Social
          </h3>
          <p className="text-gray-400 text-sm">Facebook.com/UniQbdOnline</p>
          <p className="text-gray-400 text-sm">discord.gg/jAy5cUa5nh</p>
        </div>

      </div>

      {/* Support Info Section */}
      <div className="bg-gray-900 border-t border-gray-800 py-14 text-center px-5">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">
          GET ANSWERS TO ALL YOUR QUESTIONS
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          We will answer any questions you may have about our online sales.
        </p>

        <p className="text-gray-500 mt-2">
          Everyday 10:00 AM – 12:00 PM
        </p>

        <p className="text-gray-500">
          7/365 Support Through Online Chat.
        </p>

        <button className="mt-6 bg-orange-500  hover:bg-orange-500  text-white px-6 py-3 rounded-xl transition duration-300">
          Visit Facebook Page
        </button>
      </div>

      {/* Google Map */}
      <div className="bg-gray-900 px-5 pb-16">
        <iframe
          className="w-full rounded-2xl border border-gray-700"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.972812943236!2d90.37379957967906!3d23.890582728158606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c52f3fd8458f%3A0xa500e8bc3b7d39c4!2zUmFqYWJhcmkgQ2hvd3Jhc3RhIOCmsOCmvuCmnOCmvuCmrOCmvuCnnOCmvyDgpprgp4zgprDgpr7gprjgp43gpqTgpr4!5e0!3m2!1sen!2sbd!4v1733854438841!5m2!1sen!2sbd"
          height="450"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;