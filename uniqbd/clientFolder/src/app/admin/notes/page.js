import React from "react";
import { FaUser, FaBoxOpen, FaSignOutAlt, FaChartLine, FaComments } from "react-icons/fa";
import Link from "next/link";
import { AdminMenuPage } from "../Menu/page";

const Note = () => {
  return (
    <div className="min-h-screen p-6 text-button">
      <div className="max-w-7xl mx-auto bg-button/5 rounded-3xl shadow-lg shadow-button/30 overflow-hidden">
        <div className="grid md:grid-cols-12">

          {/* ================= Sidebar ================= */}
          <div className="md:col-span-3 p-8 border-r bg-button/5">

            <h2 className="text-2xl font-bold mb-10 tracking-wide">
            Admin Panel
            </h2>

             <AdminMenuPage/>
          </div>

          {/* ================= Content Area ================= */}
          <div className="md:col-span-9 p-10">

            <h1 className="text-3xl font-bold mb-8">
               Add & Manage Notes
            </h1>

            {/* ===== Add Note Card ===== */}
            <div className="bg-button/5 rounded-2xl p-6 mb-8">

              <h3 className="text-lg font-semibold mb-4 ">
                Add New Note
              </h3>

              <input
                type="text"
                placeholder="Write your note..."
                className="w-full bg-button/5 rounded-xl px-4 py-3 text-button focus:outline-none shadow-lg shadow-button/20 transition"
              />

              <button className="mt-4 bg-button text-white hover:bg-button/70 shadow-lg shadow-button/20 px-6 py-2 rounded-xl font-semibold transition">
                Save Note
              </button>

            </div>

            {/* ===== Notes List ===== */}
            <div className="bg-button/5 rounded-2xl p-6">

              <h3 className="text-lg font-semibold mb-4">
                All Notes
              </h3>

              <div className="space-y-3">

                <div className="bg-button/5 shadow-lg shadow-button/20 px-4 py-3 rounded-xl flex justify-between items-center">
                  <p>Update product price tomorrow</p>
                  <button className="text-button hover:text-red-500 transition">
                    Edit
                  </button>
                </div>

                <div className="bg-button/5 shadow-lg shadow-button/20 px-4 py-3 rounded-xl flex justify-between items-center">
                  <p>Check pending orders</p>
                  <button className="text-button hover:text-red-500 transition">
                    Edit
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Note;