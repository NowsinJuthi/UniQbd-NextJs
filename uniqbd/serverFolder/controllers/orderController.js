import sendEmailFun from "../config/sendEamil.js";
import orderModel from "../models/orderModel.js";
import userModel from "../models/usersModel.js";

// 🔥 SOCKET IMPORT (REAL-TIME)
import { io } from "../index.js";


//  CREATE ORDER CONTROLLER (REAL-TIME ADDED)
export const createOrderController = async (req, res) => {
  try {
    const userId = req.userId;

    const {
      products,
      paymentId,
      payment_status,
      order_status,
      totalAmt,
      paymentMethod,
      paymentNumber,
      customerEmail,
      customerName,
      customerLocation,
      customerMobile,
      orderNote,
    } = req.body;

    console.log(" FULL REQ BODY:", req.body);

    if (!products || products.length === 0) {
      return res.status(400).json({
        message: "No products in order",
        success: false,
      });
    }

    const newOrder = new orderModel({
      userId,

      customerEmail: customerEmail || "",
      customerName: customerName || "",
      customerLocation: customerLocation || "",
      customerMobile: customerMobile || "",
      orderNote: orderNote || "",

      products: products.map((item) => ({
        productId: item.id,
        productTitle: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.img,
        subTotal: item.price * item.quantity,
      })),

      paymentId: paymentId || "",
      paymentMethod: paymentMethod || "",
      paymentNumber: paymentNumber || "",
      payment_status: payment_status || "pending",
      order_status: order_status || "pending",
      totalAmt: totalAmt || 0,
    });

    const savedOrder = await newOrder.save();

      
    io.emit("new-order", {
      type: "NEW_ORDER",
      message: "🛒 New Order Received",
      order: savedOrder,
    });

    //  EMAIL ON ORDER CREATE
    if (customerEmail?.trim()) {
      await sendEmailFun({
        sendTo: customerEmail,
        subject: "Order Confirmed - UniQbd",
        text: "Order placed",
        html: `
          <div>
            <h2>🎉 Order Confirmed</h2>
            <p>Hi ${customerName}</p>
            <p>Your order is received.</p>
            <p>Total: ${totalAmt} TK</p>
          </div>
        `,
      });
    }

    return res.status(201).json({
      success: true,
      order: savedOrder,
    });
  } catch (error) {
    console.log("ORDER CREATE ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =========================================================
   GET ALL ORDERS
========================================================= */
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* =========================================================
   GET USER ORDERS
========================================================= */
export const getUserOrdersController = async (req, res) => {
  try {
    const userId = req.userId;

    const orders = await orderModel.find({ userId }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* =========================================================
   ORDER STATUS UPDATE (REAL-TIME ADDED)
========================================================= */
export const OrdersStatusController = async (req, res) => {
  try {
    const { order_status } = req.body;

    console.log("Incoming status:", order_status);

    if (!order_status) {
      return res.status(400).json({
        success: false,
        message: "Order status is required",
      });
    }

    const order = await orderModel.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    const newStatus = String(order_status).toLowerCase();

    order.order_status = newStatus;
    await order.save();

    /* =====================================================
       🔥 REAL-TIME STATUS UPDATE
    ===================================================== */
    io.emit("order-status-updated", {
      type: "STATUS_UPDATE",
      message: "Order status updated",
      orderId: order._id,
      status: newStatus,
    });

    const email = order.customerEmail?.trim();

    // CANCEL EMAIL
    if (newStatus === "cancelled" && email) {
      await sendEmailFun({
        sendTo: email,
        subject: "❌ Order Cancelled",
        text: "Cancelled",
        html: `
          <div>
            <h2>Order Cancelled</h2>
            <p>Hi ${order.customerName}</p>
            <p>Your order was cancelled.</p>
          </div>
        `,
      });
    }

    // COMPLETED EMAIL
    if (newStatus === "completed" && email) {
      await sendEmailFun({
        sendTo: email,
        subject: "🎉 Order Completed",
        text: "Completed",
        html: `
          <div>
            <h2>🎉 Order Completed</h2>
            <p>Hi ${order.customerName}</p>
            <p>Your order is completed successfully.</p>
            <p>Total: ${order.totalAmt} TK</p>
          </div>
        `,
      });
    }

    return res.json({
      success: true,
      message: "Order status updated",
      order,
    });
  } catch (error) {
    console.log("STATUS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =========================================================
   SINGLE ORDER
========================================================= */
export const getSingleOrderController = async (req, res) => {
  try {
    const order = await orderModel.findById(req.params.id).populate("notes"); ;

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================================================
   ADMIN DASHBOARD
========================================================= */
export const adminDashboardController = async (req, res) => {
  try {
    const totalOrders = await orderModel.countDocuments();
    const totalCustomers = await userModel.countDocuments();

    const revenueResult = await orderModel.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$totalAmt" },
        },
      },
    ]);

    return res.json({
      totalOrders,
      totalCustomers,
      revenue: revenueResult[0]?.total || 0,
    });
  } catch (error) {
    console.error("ADMIN DASHBOARD ERROR:", error);
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

/* =========================================================
   AUTH CHECK
========================================================= */
export const requireLogin = (req, res, next) => {
  if (!req.userId) {
    return res.status(401).json({ message: "Login required" });
  }
  next();
};