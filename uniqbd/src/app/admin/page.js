import React from "react";
import Link from "next/link";
import {
  FaUser,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaChartLine,
  FaComments,
} from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  p-6">
      <div className="max-w-7xl mx-auto bg-black rounded-3xl shadow-2xl overflow-hidden border border-gray-800">

        <div className="grid md:grid-cols-12">

          {/* ================= Sidebar ================= */}
          <div className="md:col-span-3 bg-black text-white p-8 border-r border-gray-800">

            <h2 className="text-2xl font-bold mb-10 tracking-wide">
              Admin Panel
            </h2>

            <div className="flex flex-col gap-3 text-sm">

              {[
                { href: "/admin", icon: <FaChartLine />, text: "Dashboard", active: true },
                { href: "/admin/orders", icon: <FaBoxOpen />, text: "Orders" },
                { href: "/admin/products", icon: <FaUser />, text: "Add Products" },
                { href: "/admin/notes", icon: <FaComments />, text: "Add Note" },
                { href: "/admin/reviews", icon: <FaComments />, text: "Reviews" },
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300
                      ${
                        item.active
                          ? "bg-orange-500 text-white shadow-lg"
                          : "hover:bg-gray-800"
                      }
                    `}
                  >
                    {item.icon}
                    {item.text}
                  </div>
                </Link>
              ))}

              <button className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 px-4 py-3 rounded-xl mt-6 transition-all duration-300">
                <FaSignOutAlt /> Logout
              </button>

            </div>
          </div>

          {/* ================= Content ================= */}
          <div className="md:col-span-9 p-10 text-white bg-gray-800">

            <h1 className="text-3xl font-bold mb-8">
             Welcome Back, Admin
            </h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {[
                { title: "Total Orders", value: "120" },
                { title: "Total Customers", value: "45" },
                { title: "Revenue", value: "$5,430" },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-black p-6 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-gray-400 text-sm">{card.title}</h3>
                  <p className="text-3xl font-bold mt-3">{card.value}</p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;