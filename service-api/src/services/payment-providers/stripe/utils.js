const invariant = require("invariant");

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

let client;
module.exports = {
  getClient: () => {
    invariant(
      STRIPE_SECRET_KEY,
      "process.env.STRIPE_SECRET_KEY is not defined"
    );

    if (!client) {
      const stripeSdk = require("stripe");
      client = stripeSdk(STRIPE_SECRET_KEY);
    }

    return client;
  },
};
