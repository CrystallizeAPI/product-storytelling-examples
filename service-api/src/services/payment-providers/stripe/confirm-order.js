module.exports = async function confirmOrder({
  paymentIntentId,
  checkoutModel,
  context,
}) {
  const crystallize = require("../../crystallize");
  const basketService = require("../../basket-service");

  const toCrystallizeOrderModel = require("./to-crystallize-order-model");

  const { basketModel } = checkoutModel;
  const { user } = context;

  const basket = await basketService.get({ basketModel, context });

  // Prepare a valid model for Crystallize order intake
  const crystallizeOrderModel = await toCrystallizeOrderModel({
    basket,
    checkoutModel,
    paymentIntentId,
    customerIdentifier:
      user?.email || checkoutModel?.customer?.addresses?.[0]?.email || "",
    isFirstOrder: true,
  });

  /**
   * Record the order in Crystallize
   * Manage the order lifecycle by using the fulfilment pipelines:
   * https://crystallize.com/learn/user-guides/orders-and-fulfilment
   */
  const order = await crystallize.orders.create(crystallizeOrderModel);

  //update stock for all items in cart once order is confirmed
  // const updateStock = await Promise.all(basketModel.cart.map(async (item) => {
  //   const itemStockUpdate = await crystallize.orders.updateStock(item)
  //   return await itemStockUpdate;
  // }))

  return {
    success: true,
    orderId: order.id,
  };
};
