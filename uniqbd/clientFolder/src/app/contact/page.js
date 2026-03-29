import React from "react";

const Contact = () => {
  return (
    <div className="text-gray-200 min-h-screen">

      {/* Header */}
      <div className="py-16 rounded-3xl text-center px-5 bg-box backdrop-blur-md border
       border-white/10 shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-button">
          UniQbd
        </h1>

        <h2 className="text-2xl font-semibold mb-4 text-button">
          CONTACT US
        </h2>

        <p className="max-w-3xl mx-auto text-button">
          SMS To Our Facebook Page Without Calling To Get Fast Service Or Get Your Product Delivered.
        </p>

        <p className="max-w-3xl mx-auto text-button mt-2">
          দ্রুত পরিষেবা পেতে অথবা আপনার পণ্য দ্রুত ডেলিভারি পেতে কল না করে আমাদের ফেসবুক পেজে এসএমএস করুন।
        </p>

        <p className="max-w-3xl mx-auto text-red-400 mt-3">
          WhatsApp Call Support Available NO — Only SMS Support.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Address */}
        <div className="bg-box shadow-lg backdrop-blur-md border border-white/10 rounded-2xl p-6
        hover:shadow-[0_0_20px_oklch(39.716%_0.06984_227.223_/0.6)] transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-button">
            📍 Address
          </h3>
          <p className="text-button text-sm">
            Razabari, Turag, Dhaka-1711 <br />
            House 13, Road 01, Block B, Ward 54
          </p>
        </div>

        {/* Support */}
        <div className="bg-box shadow-lg backdrop-blur-md border border-white/10 rounded-2xl p-6
        hover:shadow-[0_0_20px_oklch(39.716%_0.06984_227.223_/0.6)] transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-button">
            📞 Support
          </h3>
          <p className="text-button text-sm">01777139777</p>
          <p className="text-button text-sm">01977712177</p>
          <p className="text-button text-sm mt-2">
            WhatsApp SMS: 01777139777
          </p>
        </div>

        {/* Email */}
        <div className="bg-box shadow-lg backdrop-blur-md border border-white/10 rounded-2xl p-6
        hover:shadow-[0_0_20px_oklch(39.716%_0.06984_227.223_/0.6)] transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-button">
            📧 Email
          </h3>
          <p className="text-button text-sm">support@uniqbd.com</p>
          <p className="text-button text-sm">info@uniqbd.com</p>
        </div>

        {/* Social */}
        <div className="bg-box shadow-lg backdrop-blur-md border border-white/10 rounded-2xl p-6
        hover:shadow-[0_0_20px_oklch(39.716%_0.06984_227.223_/0.6)] transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-button">
            🌐 Social
          </h3>
          <p className="text-button text-sm">Facebook.com/UniQbdOnline</p>
          <p className="text-button text-sm">discord.gg/jAy5cUa5nh</p>
        </div>

      </div>

      {/* Support Info */}
      <div className="py-16 text-center px-5 border-t border-white/10">

        <h2 className="text-3xl font-bold mb-4 text-button">
          GET ANSWERS TO ALL YOUR QUESTIONS
        </h2>

        <p className="text-button/80 max-w-3xl mx-auto">
          We will answer any questions you may have about our online sales.
        </p>

        <p className="text-button/80 mt-2">
          Everyday 10:00 AM – 12:00 PM
        </p>

        <p className="text-button/80">
          7/365 Support Through Online Chat.
        </p>

        <button className="mt-6 bg-button hover:scale-105 text-white px-8 py-3 rounded-xl transition duration-300 shadow-lg">
          Visit Facebook Page
        </button>

      </div>

      {/* Google Map */}
      <div className="px-5 pb-16">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-lg">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.972812943236!2d90.37379957967906!3d23.890582728158606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c52f3fd8458f%3A0xa500e8bc3b7d39c4!2zUmFqYWJhcmkgQ2hvd3Jhc3RhIOCmsOCmvuCmnOCmvuCmrOCmvuCnnOCmvyDgpprgp4zgprDgpr7gprjgp43gpqTgpr4!5e0!3m2!1sen!2sbd!4v1733854438841!5m2!1sen!2sbd"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default Contact;