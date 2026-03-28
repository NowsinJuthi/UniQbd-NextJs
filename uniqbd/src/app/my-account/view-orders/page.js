import React from "react";
import { MenuPage } from "../menu/MenuPage";

const ViewPage = () => {
  const orderItems = [
    { name: "Pubg Mobile uc", price: 700, quantity: 2 },
    { name: "Free Fire Diamond", price: 150, quantity: 1 },
    { name: "itunes Gift Card", price: 250, quantity: 1 },
  ];

  const subtotal = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-xl">
        <div className="grid md:grid-cols-12">
          <MenuPage />

          {/* Content */}
          <div className="md:col-span-9 p-8 bg-gradient-to-br from-background via-imgcard to-background">
            <h1 className="text-3xl font-bold mb-6 text-text">Order Details</h1>

            {/* User & Payment Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-text/90">
              <div>
                <p className="font-medium">Order Number:</p>
                <span className="font-semibold text-text">#8767686</span>
              </div>
              <div>
                <p className="font-medium">Date:</p>
                <span className="text-text">3/28/2026</span>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <span className="text-text">juthi@gmail.com</span>
              </div>
              <div>
                <p className="font-medium">Order Status:</p>
                <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400 font-semibold">
                  Completed
                </span>
              </div>
              <div>
                <p className="font-medium">Payment Method:</p>
                <span className="text-text">bKash</span>
              </div>
              <div>
                <p className="font-medium">Payment Number:</p>
                <span className="text-text">000199999</span>
              </div>
              <div className="md:col-span-2">
                <p className="font-medium">Transaction ID:</p>
                <span className="text-text">tutuityu</span>
              </div>
            </div>

            {/* Products Table */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="bg-button text-white">
                    <th className="p-4 text-left">Product Name</th>
                    <th className="p-4 text-left">Price</th>
                    <th className="p-4 text-left">Quantity</th>
                    <th className="p-4 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-white/5 hover:bg-white/5 transition shadow-inner shadow-button/30"
                    >
                      <td className="p-4 font-semibold">{item.name}</td>
                      <td className="p-4">{item.price} TK</td>
                      <td className="p-4">{item.quantity}</td>
                      <td className="p-4 font-semibold">{item.price * item.quantity} TK</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Subtotal */}
            <div className="text-right mt-6 text-text/90">
              <p className="text-lg font-medium">
                Subtotal: <span className="font-bold text-button">{subtotal} TK</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;