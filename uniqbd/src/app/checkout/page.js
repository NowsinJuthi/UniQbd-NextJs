import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE - BILLING DETAILS */}
        <div>
          <h1 className="text-2xl font-bold mb-6 border-b pb-2">
            Billing Details
          </h1>

          <div className="space-y-5">
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">State/Country</label>
              <select
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select your location</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Rajshahi</option>
                <option>Sylhet</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Mobile Number</label>
              <input
                type="number"
                placeholder="Enter your mobile number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-6 mb-2">
                Additional Information
              </h2>
              <textarea
                placeholder="Notes about your order"
                rows="3"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold mb-6 border-b pb-2">
            Your Order
          </h1>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Pubg Mobile Uc</span>
              <span>125 TK</span>
            </div>

            <div className="flex justify-between">
              <span>Mechanical Keyboard</span>
              <span>$75</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>$100</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300">
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default Checkout;