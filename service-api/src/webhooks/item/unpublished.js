module.exports = function itemUnpublished(payload) {
  console.log("Webhook payload: itemUnpublished");
  console.log(JSON.stringify(payload, null, 2));
};
