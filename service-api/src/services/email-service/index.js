const { sendEmail } = require("./utils");

const sendOrderConfirmation = require("./order-confirmation");
const sendUserMagicLink = require("./user-magic-link");

module.exports = {
  sendEmail,
  sendOrderConfirmation,
  sendUserMagicLink,
};
