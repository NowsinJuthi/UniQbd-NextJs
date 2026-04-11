"use client";

import React, { useEffect, useState } from "react";
import { AdminMenuPage } from "./Menu/page";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3001/api/v1/admin");
       console.log(res)
       setStats(res.data);
     
    } catch (err) {
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();


    const interval = setInterval(fetchDashboard, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6 p-6">
      {/* Sidebar */}
      <div className="md:col-span-3 p-8 border-r bg-button/5">
        <AdminMenuPage />
      </div>

      {/* Main */}
      <div className="col-span-12 md:col-span-9">
        <h1 className="text-3xl font-bold mb-8">
          Welcome Back, Admin
        </h1>

        {loading && (
          <p className="text-gray-400">Loading dashboard...</p>
        )}

        {error && (
          <p className="text-red-500">{error}</p>
        )}

        {!loading && stats && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Total Orders", value: stats.totalOrders },
              { title: "Total Customers", value: stats.totalCustomers },
              { title: "Revenue", value: stats.revenue },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-button/5 shadow-lg p-6 rounded-2xl hover:border-orange-500 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-gray-400 text-sm">{card.title}</h3>
                <p className="text-3xl font-bold mt-3">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;