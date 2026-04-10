import orderModel from "../models/orderModel.js";
import userModel from "../models/usersModel.js";


export const createOrderController = async (req, res) => {
  try {
    const userId = req.userId; // from auth middleware

    const {
      products,
      paymentId,
      payment_status,
      order_status,
      totalAmt,
    } = req.body;


    if (!products || products.length === 0) {
      return res.status(400).json({
        message: "No products in order",
        success: false,
      });
    }


    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }


    const newOrder = new orderModel({
      userId,
      products: products.map((item) => ({
        productId: item.id,
        productTitle: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.img,
        subTotal: item.price * item.quantity,
      })),

      paymentId: paymentId || "",
      payment_status: payment_status || "pending",
      order_status: order_status || "pending",
      totalAmt: totalAmt || 0,
    });

    const savedOrder = await newOrder.save();

    await userModel.findByIdAndUpdate(userId, {
      $push: { orderHistory: savedOrder._id },
    });

    return res.status(201).json({
      message: "Order placed successfully",
      success: true,
      order: savedOrder,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};