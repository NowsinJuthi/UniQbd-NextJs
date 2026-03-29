import React from "react";
import { MenuPage } from "../menu/MenuPage";
import Link from "next/link";

const Orders = () => {
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-xl">
        <div className="grid md:grid-cols-12">
          <MenuPage />

          {/* content */}

          <div className="md:col-span-9 p-8 bg-gradient-to-br from-background via-imgcard to-background">
            <h1 className="text-3xl font-bold mb-6 text-text">My Orders</h1>

            {/* table */}

            <div className="rounded-xl overflow-hidden border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-button text-white">
                    <th className="p-4 text-left">Order</th>

                    <th className="p-4 text-left">Date</th>

                    <th className="p-4 text-left">Status</th>

                    <th className="p-4 text-left">Total</th>

                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition shadow-inner shadow-button/30">
                    <td className="p-4 font-semibold text-text">#54564</td>

                    <td className="p-4 text-text/80">Aug 31, 2026</td>

                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                        Completed
                      </span>
                    </td>

                    <td className="p-4 font-semibold text-button">250 TK</td>

                    <td className="p-4 text-center">
                      <Link href={'/my-account/view-orders'}>
                        <button className="px-4 py-2 rounded-lg bg-button text-white hover:opacity-90 transition">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>

                  {/* example pending */}

                  <tr className="border-b border-white/5 hover:bg-white/5 transition shadow-inner shadow-button/30">
                    <td className="p-4 font-semibold text-text">#54565</td>

                    <td className="p-4 text-text/80">Sep 2, 2026</td>

                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400">
                        Pending
                      </span>
                    </td>

                    <td className="p-4 font-semibold text-button">700 TK</td>

                    <td className="p-4 text-center">
                      <button className="px-4 py-2 rounded-lg bg-button text-white hover:opacity-90 transition">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
