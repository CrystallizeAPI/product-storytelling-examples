module.exports = function itemDeleted(payload) {
  console.log("Webhook payload: itemDeleted");
  console.log(JSON.stringify(payload, null, 2));
};
