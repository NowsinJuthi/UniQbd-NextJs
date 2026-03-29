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
      price: {
        type: Number,
      },
      image: {
        type: String,
      },
      subTotal:{
        type: Number
      },
    },
  ],

  paymentId:{
    type: String,
    default:""
  },
  payment_status:{
    type: String,
    default:""
  },
  order_status:{
    type: String,
    default:""
  },
  totalAmt:{
    type: String,
    default:0
  }
},{timestamps: true});

const orderModel = mongoose.model('order', orderShema)

export default orderModel;
