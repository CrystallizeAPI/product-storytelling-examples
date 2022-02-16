const invariant = require("invariant");

const VIPPS_MERCHANT_SERIAL = process.env.VIPPS_MERCHANT_SERIAL;

module.exports = async function initiateVippsPayment({
  checkoutModel,
  context,
}) {
  const basketService = require("../../basket-service");
  const crystallize = require("../../crystallize");

  const { getClient } = require("./utils");

  invariant(
    VIPPS_MERCHANT_SERIAL,
    "process.env.VIPPS_MERCHANT_SERIAL is undefined"
  );

  const { basketModel, customer, confirmationURL, checkoutURL } = checkoutModel;
  const { serviceCallbackHost, user } = context;

  // Add the identifier from the current logged in user
  const customerWithCurrentLoggedInUser = {
    ...customer,
  };
  if (user) {
    customerWithCurrentLoggedInUser.identifier = user.email;
  }

  const basket = await basketService.get({ basketModel, context });
  const { total } = basket;

  /* Use a Crystallize order and the fulfilment pipelines to
   * manage the lifecycle of the order
   */
  const crystallizeOrder = await crystallize.orders.create({
    ...basket,
    customer: customerWithCurrentLoggedInUser,
  });
  const crystallizeOrderId = crystallizeOrder.id;

  /**
   * The Vipps "fallback" url, is where the user will be redirected
   * to after completing the Vipps checkout.
   */
  const fallBackURL = new URL(
    `${serviceCallbackHost}/webhooks/payment-providers/vipps/fallback/${crystallizeOrderId}`
  );
  fallBackURL.searchParams.append(
    "confirmation",
    encodeURIComponent(
      confirmationURL.replace("{crystallizeOrderId}", crystallizeOrderId)
    )
  );
  fallBackURL.searchParams.append("checkout", encodeURIComponent(checkoutURL));

  const vippsClient = await getClient();

  const vippsResponse = await vippsClient.initiatePayment({
    order: {
      merchantInfo: {
        merchantSerialNumber: VIPPS_MERCHANT_SERIAL,
        fallBack: fallBackURL.toString(),
        callbackPrefix: `${serviceCallbackHost}/webhooks/payment-providers/vipps/order-update`,
        shippingDetailsPrefix: `${serviceCallbackHost}/webhooks/payment-providers/vipps/shipping`,
        consentRemovalPrefix: `${serviceCallbackHost}/webhooks/payment-providers/vipps/constent-removal`,
        paymentType: "eComm Express Payment",
        isApp: false,
        staticShippingDetails: [
          // Provide a default shipping method
          {
            isDefault: "Y",
            priority: 0,
            shippingCost: 0,
            shippingMethod: "Posten Servicepakke",
            shippingMethodId: "posten-servicepakke",
          },
        ],
      },
      customerInfo: {},
      transaction: {
        orderId: crystallizeOrderId,
        amount: parseInt(total.gross * 100, 10),
        transactionText: "Crystallize test transaction",
      },
    },
  });

  return {
    success: true,
    checkoutLink: vippsResponse.url,
    crystallizeOrderId,
  };
};
