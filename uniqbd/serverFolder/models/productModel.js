import mongoose from "mongoose";

const orderShema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  products: [
    {
      productId: {
        type: String,
      },
      productTitle: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      regularPrice: {
        type: Number,
      },
      discountPrice: {
        type: Number,
      },
      image: {
        type: String,
      },
      longDescription: {
        type: String,
      },
      shortDescription: {
        type: String,
      },
    },
  ],
});
