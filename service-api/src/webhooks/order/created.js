const emailService = require("../../services/email-service");
const handleFBAFulfilment = require("../../services/fulfillment-service/amazon-fba")

module.exports = async function orderCreated(payload) {
  console.log("Webhook payload: orderCreated");
  console.log(JSON.stringify(payload, null, 2));
  /*
  * Fulfil Order using Amazon's FBA
  */
  const FBAResponse = await handleFBAFulfilment(payload)
  console.log("Products resolved", JSON.stringify(FBAResponse, null, 2))
  /**
   * You can send out an order confirmation email here
   * if you like
   */
  await emailService.sendOrderConfirmation(payload.order.data.id);
  return FBAResponse
};
