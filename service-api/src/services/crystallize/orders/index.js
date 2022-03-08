const create = require("./create-order");
const update = require("./update-order");
const get = require("./get-order");
const waitForOrderToBePersistated = require("./wait-for-order-to-be-persistated");
const updateStock = require("./update-stock")

module.exports = {
  create,
  update,
  get,
  waitForOrderToBePersistated,
  updateStock
};
