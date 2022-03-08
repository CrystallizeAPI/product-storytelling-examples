async function confirmPaypalPayment({ checkoutModel, orderId, context }) {
  const checkoutNodeJssdk = require("@paypal/checkout-server-sdk");
  
  const crystallize = require("../../crystallize");
  const basketService = require("../../basket-service");
  const { paypal: PaypalClient } = require("./init-client");
  const toCrystallizeOrderModel = require("./to-crystallize-order-model");

  try {
    const { basketModel } = checkoutModel;
    const basket = await basketService.get({ basketModel, context });
  
    const response = await PaypalClient().execute(
      new checkoutNodeJssdk.orders.OrdersGetRequest(orderId)
    );

    const order = await crystallize.orders.create(
      toCrystallizeOrderModel(basket, response.result)
    );

    return {
      success: true,
      orderId: order.id,
    };
  } catch (err) {
    console.error(err);
  }
  
  return {
    success: false
  };
}

module.exports = confirmPaypalPayment;
