/**
 * Manual invoice "payment provider"
 *
 * All that this does is to allow an unpaid cart
 * to be stored in Crystallize
 */

const createCrystallizeOrder = require("./create-crystallize-order");

module.exports = {
  enabled: true,
  frontendConfig: {},
  createCrystallizeOrder,
};
