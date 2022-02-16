const invariant = require("invariant");

const VIPPS_CLIENT_ID = process.env.VIPPS_CLIENT_ID;
const VIPPS_CLIENT_SECRET = process.env.VIPPS_CLIENT_SECRET;
const VIPPS_SUB_KEY = process.env.VIPPS_SUB_KEY;

let client;
module.exports = {
  getClient: () => {
    invariant(VIPPS_CLIENT_ID, "process.env.VIPPS_CLIENT_ID is not defined");
    invariant(
      VIPPS_CLIENT_SECRET,
      "process.env.VIPPS_CLIENT_SECRET is not defined"
    );
    invariant(VIPPS_SUB_KEY, "process.env.VIPPS_SUB_KEY is not defined");

    if (!client) {
      const VippsClient = require("@crystallize/node-vipps");
      client = new VippsClient({
        testDrive: true,
        id: VIPPS_CLIENT_ID,
        secret: VIPPS_CLIENT_SECRET,
        subscriptionId: VIPPS_SUB_KEY,
      });
    }

    return client;
  },
};
