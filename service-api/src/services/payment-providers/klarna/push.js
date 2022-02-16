module.exports = async function klarnaPush({
  crystallizeOrderId,
  klarnaOrderId,
}) {
  const { getClient } = require("./utils");
  console.log("Klarna push", { crystallizeOrderId, klarnaOrderId });

  const klarnaClient = await getClient();

  // Retrieve the Klarna order to get the payment status

  // Acknowledge the Klarna order
  await klarnaClient.ordermanagementV1.orders.acknowledge(klarnaOrderId);

  /**
   * You would typically also move the order in the
   * fulfilment pipeline from a stage called e.g.
   * "initial" to "created" here
   */
};
