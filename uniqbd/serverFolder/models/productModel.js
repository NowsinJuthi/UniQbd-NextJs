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
        package: { type: String },
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
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
