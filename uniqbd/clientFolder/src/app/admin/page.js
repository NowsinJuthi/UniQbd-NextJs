import React from "react";
import { AdminMenuPage } from "./Menu/page";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-6 p-6">
     

  
          <div className="md:col-span-3 p-8 border-r bg-button/5">

            <AdminMenuPage/>
          </div>

 
          <div className="col-span-12 md:col-span-9">

            <h1 className="text-3xl font-bold mb-8">
             Welcome Back, Admin
            </h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">

              {[
                { title: "Total Orders", value: "120" },
                { title: "Total Customers", value: "45" },
                { title: "Revenue", value: "5,430" },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-button/5 shadow-lg shadow-30 p-6 rounded-2xl hover:border-orange-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-gray-400 text-sm">{card.title}</h3>
                  <p className="text-3xl font-bold mt-3">{card.value}</p>
                </div>
              ))}

            </div>

          </div>

 
  
    </div>
  );
};

export default AdminDashboard;