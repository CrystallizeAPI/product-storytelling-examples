/**
 * Vipps (https://vipps.no)
 *
 * Getting started:
 * https://crystallize.com/learn/open-source/payment-gateways/vipps
 */

const VIPPS_CLIENT_ID = process.env.VIPPS_CLIENT_ID;
const VIPPS_CLIENT_SECRET = process.env.VIPPS_CLIENT_SECRET;
const VIPPS_MERCHANT_SERIAL = process.env.VIPPS_MERCHANT_SERIAL;
const VIPPS_SUB_KEY = process.env.VIPPS_SUB_KEY;

const initiatePayment = require("./initiate-payment");
const fallback = require("./fallback");
const orderUpdate = require("./order-update");
const userConsentRemoval = require("./user-consent-removal");

module.exports = {
  enabled: Boolean(
    VIPPS_CLIENT_ID &&
      VIPPS_CLIENT_SECRET &&
      VIPPS_MERCHANT_SERIAL &&
      VIPPS_SUB_KEY
  ),
  frontendConfig: {},
  initiatePayment,
  fallback,
  orderUpdate,
  userConsentRemoval,
};
