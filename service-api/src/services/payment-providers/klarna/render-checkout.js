module.exports = async function renderCheckout({ checkoutModel, context }) {
  const crystallize = require("../../crystallize");
  const basketService = require("../../basket-service");

  const { getClient } = require("./utils");
  const toKlarnaOrderModel = require("./to-klarna-order-model");

  const {
    basketModel,
    customer,
    confirmationURL,
    termsURL,
    checkoutURL,
  } = checkoutModel;
  const { serviceCallbackHost, user } = context;

  let { crystallizeOrderId, klarnaOrderId } = basketModel;

  const basket = await basketService.get({ basketModel, context });

  // Add the identifier from the current logged in user
  const customerWithCurrentLoggedInUser = {
    ...customer,
  };
  if (user) {
    customerWithCurrentLoggedInUser.identifier = user.email;
  }

  /**
   * Use a Crystallize order and the fulfilment pipelines to
   * manage the lifecycle of the order
   */
  if (crystallizeOrderId) {
    await crystallize.orders.update(crystallizeOrderId, {
      ...basket,
      customer: customerWithCurrentLoggedInUser,
    });
  } else {
    const crystallizeOrder = await crystallize.orders.create({
      ...basket,
      customer: customerWithCurrentLoggedInUser,
    });
    crystallizeOrderId = crystallizeOrder.id;
  }

  // Setup the confirmation URL
  const confirmation = new URL(
    confirmationURL.replace("{crystallizeOrderId}", crystallizeOrderId)
  );
  confirmation.searchParams.append("klarnaOrderId", "{checkout.order.id}");

  const validKlarnaOrderModel = {
    ...toKlarnaOrderModel(basket),
    purchase_country: "NO",
    purchase_currency: basket.total.currency || "NOK",
    locale: "no-nb",
    merchant_urls: {
      terms: termsURL,
      checkout: checkoutURL,
      confirmation: confirmation.toString(),
      push: `${serviceCallbackHost}/webhooks/payment-providers/klarna/push?crystallizeOrderId=${crystallizeOrderId}&klarnaOrderId={checkout.order.id}`,
    },
  };

  const klarnaClient = await getClient();

  /**
   * Hold the HTML snippet that will be used on the
   * frontend to display the Klarna checkout
   */
  let html = "";

  /**
   * There is already a Klarna order id for this user
   * session, let's use that and not create a new one
   */
  if (klarnaOrderId) {
    const { error, response } = await klarnaClient.checkoutV3.updateOrder(
      klarnaOrderId,
      validKlarnaOrderModel
    );

    if (!error) {
      html = response.html_snippet;
      klarnaOrderId = response.order_id;
    } else {
      throw new Error(error);
    }
  } else {
    const { error, response } = await klarnaClient.checkoutV3.createOrder(
      validKlarnaOrderModel
    );

    if (!error) {
      html = response.html_snippet;
      klarnaOrderId = response.order_id;
    } else {
      throw new Error(error);
    }
  }

  /**
   * The Crystallize order creating is asynchronous, so we have
   * to wait for the order to be fully persisted
   */
  await crystallize.orders.waitForOrderToBePersistated({
    id: crystallizeOrderId,
  });

  // Tag the Crystallize order with the Klarna order id
  await crystallize.orders.update(crystallizeOrderId, {
    ...basket,
    payment: [
      {
        provider: "klarna",
        klarna: {
          orderId: klarnaOrderId,
        },
      },
    ],
  });

  return {
    html,
    klarnaOrderId,
    crystallizeOrderId,
  };
};
