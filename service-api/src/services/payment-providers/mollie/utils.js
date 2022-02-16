const invariant = require("invariant");

const MOLLIE_API_KEY = process.env.MOLLIE_API_KEY;

let client;
module.exports = {
  getClient: () => {
    invariant(MOLLIE_API_KEY, "process.env.MOLLIE_API_KEY is not defined");

    if (!client) {
      const { createMollieClient } = require("@mollie/api-client");
      client = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY });
    }

    return client;
  },
};
