"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { AdminMenuPage } from "@/app/admin/Menu/page";

const ViewPage = () => {
  const { id } = useParams();

  const [order, setOrder] = useState(null);

  const [allNotes, setAllNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState("");

  // NEW INPUT FIELD
  const [customMessage, setCustomMessage] = useState("");

  /* ================= ORDER FETCH ================= */
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/api/v1/order/${id}`
        );
        setOrder(data.order);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) fetchOrder();
  }, [id]);

  /* ================= ALL NOTES ================= */
  const fetchAllNotes = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/api/v1/all-notes`,
        { withCredentials: true }
      );

      setAllNotes(data.notes || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  /* ================= STATUS UPDATE ================= */
  const updateStatus = async (orderId, status) => {
    try {
      await axios.put(
        `http://localhost:3001/api/v1/order/status/${orderId}`,
        { status }
      );

      setOrder((prev) => ({
        ...prev,
        order_status: status,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  /* ================= SEND NOTE + CUSTOM MESSAGE ================= */
  const sendNoteToCustomer = async () => {
    try {
      if (!selectedNote && !customMessage.trim()) return;

      await axios.post(
        `http://localhost:3001/api/v1/send-notes-to-customer`,
        {
          orderId: id,
          noteIds: selectedNote ? [selectedNote] : [],
          customMessage: customMessage, // ✅ NEW FIELD
        },
        { withCredentials: true }
      );

      alert("Message sent to customer!");

      setSelectedNote("");
      setCustomMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  if (!order) return <p className="p-6">Loading...</p>;

  return (
    <div className="grid grid-cols-12 gap-6 p-6">
      {/* SIDEBAR */}
      <div className="md:col-span-3 p-8 border-r bg-button/5">
        <AdminMenuPage />
      </div>

      {/* CONTENT */}
      <div className="col-span-12 md:col-span-9">
        <h1 className="text-3xl font-bold mb-8">Order Details</h1>

        {/* ORDER INFO */}
        <div className="p-6 mb-6 bg-button/5 rounded-2xl">
          <p><b>Order:</b> #{order._id.slice(-6)}</p>
          <p><b>Status:</b> {order.order_status}</p>
          <p><b>Total:</b> {order.totalAmt} TK</p>
        </div>

        {/* PRODUCTS */}
        <div className="rounded-2xl border mb-6">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-button text-white">
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Qty</th>
              </tr>
            </thead>

            <tbody>
              {order.products.map((p, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{p.productTitle}</td>
                  <td className="p-3">{p.price}</td>
                  <td className="p-3">{p.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* STATUS */}
        <div className="flex gap-4 items-center mb-8">
          <select
            value={order.order_status}
            onChange={(e) =>
              setOrder((prev) => ({
                ...prev,
                order_status: e.target.value,
              }))
            }
            className="p-2 border rounded"
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
          </select>

          <button
            onClick={() => updateStatus(order._id, order.order_status)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Update Status
          </button>
        </div>

        {/* ================= NOTES SECTION ================= */}
        <div className="p-6 bg-button/5 rounded-xl">
          <h2 className="text-xl font-bold mb-4">
            Send Note / Message to Customer
          </h2>

          {/* NOTE DROPDOWN */}
          <select
            value={selectedNote}
            onChange={(e) => setSelectedNote(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="">Select Note (Optional)</option>

            {allNotes.map((note) => (
              <option key={note._id} value={note._id}>
                {note.title}
              </option>
            ))}
          </select>

          {/* CUSTOM MESSAGE INPUT */}
          <textarea
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            placeholder="Write custom message for customer..."
            className="w-full p-2 border rounded mb-4 h-24"
          />

          {/* PREVIEW */}
          {selectedNote && (
            <div className="mb-4 p-3 border rounded ">
              <b>{allNotes.find((n) => n._id === selectedNote)?.title}</b>
              <p className="text-sm">
                {allNotes.find((n) => n._id === selectedNote)?.text}
              </p>
            </div>
          )}

          <button
            onClick={sendNoteToCustomer}
            className="bg-green-700 text-white px-4 py-2 rounded"
          >
            Send to Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;