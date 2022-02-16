/**
 * Read more about how to talk to the Klarna API here:
 * https://developers.klarna.com/api/#introduction
 */

const invariant = require("invariant");

const KLARNA_USERNAME = process.env.KLARNA_USERNAME;
const KLARNA_PASSWORD = process.env.KLARNA_PASSWORD;

let client;

module.exports = {
  getClient: () => {
    const { Klarna } = require("@crystallize/node-klarna");

    invariant(KLARNA_USERNAME, "process.env.KLARNA_USERNAME is not defined");
    invariant(KLARNA_PASSWORD, "process.env.KLARNA_PASSWORD is not defined");

    if (!client && KLARNA_USERNAME && KLARNA_PASSWORD) {
      client = new Klarna({
        username: KLARNA_USERNAME,
        password: KLARNA_PASSWORD,
        apiEndpoint: "api.playground.klarna.com",
      });
    }

    return client;
  },
};
