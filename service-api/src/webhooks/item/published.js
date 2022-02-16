module.exports = function itemPublished(payload) {
  console.log("Webhook payload: itemPublished");
  console.log(JSON.stringify(payload, null, 2));
};
