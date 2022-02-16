module.exports = function orderUpdated(payload) {
  console.log("Webhook payload: orderUpdated");
  console.log(JSON.stringify(payload, null, 2));
};
