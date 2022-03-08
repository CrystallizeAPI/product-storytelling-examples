module.exports = function itemUpdated(payload) {
  console.log("Webhook payload: itemUpdated");
  console.log(JSON.stringify(payload, null, 2));
};
