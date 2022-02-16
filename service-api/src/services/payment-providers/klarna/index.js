const KLARNA_USERNAME = process.env.KLARNA_USERNAME;
const KLARNA_PASSWORD = process.env.KLARNA_PASSWORD;

const { getClient } = require("./utils");

const renderCheckout = require("./render-checkout");
const push = require("./push");
const capture = require("./capture");

module.exports = {
  enabled: Boolean(KLARNA_USERNAME && KLARNA_PASSWORD),
  frontendConfig: {},
  getClient,
  renderCheckout,
  push,
  capture,
};
