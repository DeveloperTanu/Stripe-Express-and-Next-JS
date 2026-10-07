const stripe = require("../config/stripe");
const planSchema = require("../models/plan.model");

const createCheckoutSession = async (user) => {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",

    line_items: [
      {
        price_data: {
          currency: "inr",

          product_data: {
            name: "Writive AI Premium",
          },

          unit_amount: 1000,
        },

        quantity: 1,
      },
    ],

    success_url: "http://localhost:5173/payment/success",
    cancel_url: "http://localhost:5173/payment/cancel",

    metadata: {
      userId: user._id.toString(),
    },
  });

  return session;
};

module.exports = {
  createCheckoutSession,
};
