module.exports = function itemCreated(payload) {
  console.log("Webhook payload: itemCreated");
  console.log(JSON.stringify(payload, null, 2));
};
