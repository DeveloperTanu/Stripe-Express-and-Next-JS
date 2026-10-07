const {
  createCheckoutSession,
} = require("../services/stripe.service");

const createCheckout = async (req, res) => {
  try {
    const session = await createCheckoutSession(req.user);

    res.status(200).json({
      url: session.url,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createCheckout,
};