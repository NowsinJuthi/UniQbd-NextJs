"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";

import { IoMdMail } from "react-icons/io";
import { FaEnvelopeOpenText, FaPaperPlane } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { AdminMenuPage } from "../Menu/page";

const Mailpage = () => {
  const pathname = usePathname();

  const [form, setForm] = useState({
    // SMTP
    host: "",
    email: "",
    password: "",
    port: "",

    // ENV CONFIG
    PORT: "",
    MONGODB_URI: "",
    ACCESS_TOKEN_SECRET: "",
    REFRESH_TOKEN_SECRET: "",
    JWT_SECRET: "",
  });

  const menu = [
    {
      href: "/admin/mail-set-up",
      name: "SMTP Setup",
      icon: <IoSettingsSharp />,
    },
    {
      href: "/admin/mail-inbox",
      name: "Inbox",
      icon: <FaEnvelopeOpenText />,
    },
    {
      href: "/admin/mail-send",
      name: "Send Mail",
      icon: <FaPaperPlane />,
    },
  ];

  const isActive = (href) => pathname === href;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveSettings = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/v1/smtp/save",
        form,
      );
      console.log(res);
      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert("Failed to save settings");
    }
  };

  //TEST CONNECTION
  const testConnection = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/v1/smtp/test", {
        ...form,
        port: Number(form.port),
      });

      console.log(res);
      alert(res.data.message);
    } catch (err) {
      console.log(err.response?.data || err);
      alert(err.response?.data?.error || "SMTP connection failed");
    }
  };

  useEffect(() => {
    const getConfig = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/v1/get");

        if (res.data.data) {
          setForm((prev) => ({
            ...prev,
            ...res.data.data,
          }));
        }
      } catch (err) {
        console.log(err);
      }
    };

    getConfig();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6 p-6 min-h-screen">
      {/* SIDEBAR */}
      <div className="md:col-span-3 p-6 border-r bg-button/5 rounded-xl">
        <AdminMenuPage />
      </div>

      {/* MAIN CONTENT */}
      <div className="col-span-12 md:col-span-9 space-y-6">
        {/* HEADER */}
        <div className="bg-button/5 p-6 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-button flex items-center justify-center text-white text-xl">
              <IoMdMail />
            </div>

            <div>
              <h1 className="text-2xl font-bold">Mail System</h1>
              <p className="text-gray-400 mt-1">
                SMTP Setup • Inbox • Send Emails
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-3">
            <div className="px-4 py-2 bg-button/10 rounded-lg text-sm">
              SMTP Active
            </div>
            <div className="px-4 py-2 bg-button/10 rounded-lg text-sm">
              Secure Mail
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-6">
          {/* MENU */}
          <div className="col-span-12 md:col-span-4 bg-button/5 p-6 rounded-2xl">
            <h2 className="text-lg font-bold mb-6">Mail Navigation</h2>

            <div className="space-y-3">
              {menu.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition
                    ${
                      isActive(item.href)
                        ? "bg-button text-white shadow-md shadow-button/30"
                        : "hover:bg-white/5 text-text/80"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="col-span-12 md:col-span-8 bg-button/5 p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-6">SMTP Configuration</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <h1>SMTP Host</h1>
              <input
                name="host"
                value={form.host}
                onChange={handleChange}
                type="text"
                placeholder="SMTP Host"
                className="p-3 rounded-xl bg-white/5 text-text outline-none"
              />
              <h1>SMTP Email</h1>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="text"
                placeholder="SMTP Email"
                className="p-3 rounded-xl bg-white/5 text-text outline-none"
              />
              <h1>SMTP Password</h1>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type="password"
                placeholder="SMTP Password"
                className="p-3 rounded-xl bg-white/5 text-text outline-none"
              />
              <h1>Port</h1>
              <input
                name="port"
                value={form.port}
                onChange={handleChange}
                type="text"
                placeholder="Port"
                className="p-3 rounded-xl bg-white/5 text-text outline-none"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={saveSettings}
                className="bg-button text-white px-6 py-2 rounded-xl hover:opacity-90 transition"
              >
                Save Settings
              </button>

              <button
                onClick={testConnection}
                className="px-6 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                Test Connection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mailpage;
