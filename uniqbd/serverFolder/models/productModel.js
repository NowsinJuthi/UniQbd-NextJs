import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    description: {
      type: String,
    },
    shortDescription: {
      type: String,
    },
    price: {
      type: Number,
    },
    discountPrice: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    packageType: [
      {
        name: { type: String },
        quantity: { type: Number },
        price: { type: Number },
        discountPrice: { type: Number },
      },
    ],
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    photo: {
      type: String,
    },
    bgPhoto: {
      type: String,
    },

    shipping: {
      instantDelivery: { type: Boolean, default: true },
      deliveryTime: { type: String, default: "5–15 minutes" },
      note: { type: String, default: "Safe & verified transaction process." },
    },
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
