module.exports = function orderDeleted(payload) {
  console.log("Webhook payload: orderDeleted");
  console.log(JSON.stringify(payload, null, 2));
};
