const { getClient } = require("./utils");
const toCrystallizeOrderModel = require("./to-crystallize-order-model");
const createPayment = require("./create-payment");

module.exports = {
  enabled: Boolean(process.env.MOLLIE_API_KEY),
  frontendConfig: {},
  getClient,
  toCrystallizeOrderModel,
  createPayment,
};
