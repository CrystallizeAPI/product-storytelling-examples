module.exports = async function orderPipelineStageChanged(payload) {
  console.log("Webhook: orderPipelineStageChanged");

  // const paypalCapture = require("../../services/payment-providers/paypal/capture-payment");
  // const paypalRefund = require("../../services/payment-providers/paypal/refund-payment");

  const {
    order: { get: order },
  } = payload;

  console.log("Order pipeline update for", order.id);
  console.log("The order is in", order.pipelines.length, "pipeline(s)");

  // Print out the different pipelines and their stage names
  const inPipelines = order.pipelines
    .filter((p) => !!p.pipeline.stages)
    .map(({ pipeline, stageId }) => {
      const { name } = pipeline;

      const stage = pipeline.stages.find((s) => s.id === stageId);
      const stageName = stage ? stage.name : "n/a";

      console.log(`- ${name} = ${stageName}`);

      return {
        name,
        stageName,
      };
    });

  // Example of a "In store" order pipeline
  const inStorePipeline = inPipelines.find((p) => p.name === "In store pickup");
  if (inStorePipeline) {
    switch (inStorePipeline.stageName) {
      case "New":
        console.log("Notify staff of new order");
        break;
      case "Packing":
        console.log("Inform the user: packing begun");
        break;
      case "Ready":
        console.log("Inform the user: ready for pickup");
        break;
      case "Delivered":
        console.log("Capture order amount from payment provider");
        // await paypalCapture(order.id);
        break;
      case "Cancelled":
        console.log("Refund order amount from payment provider");
        // await paypalRefund(order.id);
        break;
    }
  }
};
