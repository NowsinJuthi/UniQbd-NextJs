import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-cover bg-center">

      <div className="max-w-6xl mx-auto bg-button/5 backdrop-blur-lg
      border border-button/10 shadow-xl rounded-2xl p-8
      grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE - BILLING DETAILS */}
        <div>
          <h1 className="text-2xl font-bold mb-6 border-b pb-3 text-button">
            Billing Details
          </h1>

          <div className="space-y-5">

            <div>
              <label className="block font-medium mb-1 text-button/80">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-button/20 bg-transparent
                rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-button
                transition"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-button/80">
                State / Country
              </label>
              <select
                className="w-full border border-button/20 bg-transparent
                rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-button"
              >
                <option>Select your location</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Rajshahi</option>
                <option>Sylhet</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1 text-button/80">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="01XXXXXXXXX"
                className="w-full border border-button/20 bg-transparent
                rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-button"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-button/80">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-button/20 bg-transparent
                rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-button"
              />
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-lg font-semibold mt-4 mb-2 text-button/80">
                Additional Information
              </h2>

              <textarea
                placeholder="Notes about your order"
                rows="3"
                className="w-full border border-button/20 bg-transparent
                rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-button"
              />
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="bg-button/5 p-6 rounded-xl shadow-lg border border-button/10">

          <h1 className="text-2xl font-bold mb-6 border-b pb-3 text-button">
            Your Order
          </h1>

          {/* Product List */}
          <div className="space-y-4">

            <div className="flex justify-between items-center
            bg-button/10 p-3 rounded-lg">
              <span className="text-button/80">PUBG Mobile UC</span>
              <span className="font-medium text-button">125 TK</span>
            </div>

            <div className="flex justify-between items-center
            bg-button/10 p-3 rounded-lg">
              <span className="text-button/80">Mechanical Keyboard</span>
              <span className="font-medium text-button">$75</span>
            </div>

          </div>

          {/* Total */}
          <div className="mt-6 border-t pt-4 flex justify-between
          text-lg font-semibold text-button">
            <span>Total</span>
            <span>$100</span>
          </div>

          {/* Payment Method */}
          <div className="mt-6 space-y-2">

            <h2 className="font-semibold text-button">
              Payment Method
            </h2>

            <label className="flex items-center gap-2 text-button/80">
              <input type="radio" name="payment" />
              bKash
            </label>

            <label className="flex items-center gap-2 text-button/80">
              <input type="radio" name="payment" />
              Nagad
            </label>

            <label className="flex items-center gap-2 text-button/80">
              <input type="radio" name="payment" />
              Rocket
            </label>

          </div>

          {/* Button */}
          <button className="w-full mt-6 bg-button hover:bg-button/80
          shadow-xl hover:scale-105
          text-white py-3 rounded-lg font-semibold
          transition duration-300">
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
};

export default Checkout;