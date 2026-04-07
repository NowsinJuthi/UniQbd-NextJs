import React from "react";
import { FaUser, FaBoxOpen, FaSignOutAlt, FaChartLine, FaComments } from "react-icons/fa";
import Link from "next/link";
import { AdminMenuPage } from "../Menu/page";

const Orders = () => {
  return (
    <div className="grid grid-cols-12 gap-6 p-6">
     

  
          <div className="md:col-span-3 p-8 border-r bg-button/5">
            <AdminMenuPage/>
          </div>


          <div className="col-span-12 md:col-span-9">

            <h1 className="text-3xl font-bold mb-8">
               Customer Orders
            </h1>

            <div className="overflow-x-auto rounded-2xl shadow-lg shadow-button/30">

              <table className="w-full text-left">

                <thead>
                  <tr className="bg-button text-gray-300 text-sm">
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Total</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t  hover:bg-button/10 transition">
                    <td className="p-4 font-semibold">#54564</td>
                    <td className="p-4 text-button/80">August 31, 2026</td>

                    <td className="p-4">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                        Completed
                      </span>
                    </td>

                    <td className="p-4 font-medium">250 TK</td>

                    <td className="p-4 text-center text-white">
                      <button className="bg-button hover:bg-orange-600 px-4 py-2 rounded-lg text-sm transition">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>

              </table>

            </div>

          </div>

       
    </div>
  );
};

export default Orders;