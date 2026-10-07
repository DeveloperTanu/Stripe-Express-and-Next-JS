const mongoose = require("mongoose");

const stripeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    stripeCustomerId: {
      type: String,
      default: null,
    },

    stripePaymentIntentId: {
      type: String,
      default: null,
    },

    stripeSessionId: {
      type: String,
      default: null,
    },

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "inr",
    },

    status: {
      type: String,
      enum: [
        "pending",
        "paid",
        "failed",
        "cancelled",
        "refunded",
      ],
      default: "pending",
    },

    productName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StripePayment = mongoose.model(
  "StripePayment",
  stripeSchema
);

module.exports = StripePayment;