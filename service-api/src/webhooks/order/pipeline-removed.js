module.exports = function orderPipelineRemoved(payload) {
  console.log("Webhook payload: orderPipelineRemoved");
  console.log(JSON.stringify(payload, null, 2));
};
