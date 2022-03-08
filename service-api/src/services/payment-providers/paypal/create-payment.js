
async function createPaypalPayment({ checkoutModel, context }) {
  const paypal = require("@paypal/checkout-server-sdk");

  const { paypal: PaypalClient } = require("./init-client");
  const basketService = require("../../basket-service");

  const { basketModel } = checkoutModel;

  // Get a verified basket from the basket service
  const basket = await basketService.get({ basketModel, context });

  const request = new paypal.orders.OrdersCreateRequest();
  
  // Get the complete resource representation
  request.prefer("return=representation");
  
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: basket.total.currency,
          value: basket.total.gross.toString(),
        },
      },
    ],
  });

  let order;
  try {
    order = await PaypalClient().execute(request);
  } catch (err) {
    console.error(err);
    return { success: false };
  }

  return {
    success: true,
    orderId: order.result.id,
  };
}

module.exports = createPaypalPayment;
