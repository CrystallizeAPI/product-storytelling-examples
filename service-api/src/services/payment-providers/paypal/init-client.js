function getClient() {
  const checkoutNodeJssdk = require("@paypal/checkout-server-sdk");

  const clientId = process.env.PAYPAL_CLIENT_ID || "PAYPAL-SANDBOX-CLIENT-ID";
  const clientSecret =
    process.env.PAYPAL_CLIENT_SECRET || "PAYPAL-SANDBOX-CLIENT-SECRET";

  // const clientEnv =
  //   process.env.NODE_ENV === "production"
  //     ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
  //     : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);

  const clientEnv = new checkoutNodeJssdk.core.SandboxEnvironment(
    clientId,
    clientSecret
  );

  return new checkoutNodeJssdk.core.PayPalHttpClient(clientEnv);
}

module.exports = { paypal: getClient };
