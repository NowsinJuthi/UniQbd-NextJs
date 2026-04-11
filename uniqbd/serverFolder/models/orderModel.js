import mongoose from "mongoose";

const orderShema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    products: [
      {
        productId: String,
        productTitle: String,
        quantity: Number,
        price: Number,
        image: String,
        subTotal: Number,
      },
    ],

    paymentId: {
      type: String,
      default: "",
    },

    paymentMethod: {
      type: String,
      enum: ["bkash", "nagad", "rocket"],
      default: "",
    },

    paymentNumber: {
      type: String,
      default: "",
    },

    payment_status: {
      type: String,
      default: "",
    },

    order_status: {
      type: String,
      default: "",
    },

    totalAmt: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("order", orderShema);
export default orderModel;