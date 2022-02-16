module.exports = async function createCrystallizeOrder({
  checkoutModel,
  context,
}) {
  const basketService = require("../../basket-service");
  const crystallize = require("../../crystallize");

  const { basketModel, customer } = checkoutModel;
  const { user } = context;

  // Add the identifier from the current logged in user
  const customerWithCurrentLoggedInUser = {
    ...customer,
  };
  if (user) {
    customerWithCurrentLoggedInUser.identifier = user.email;
  }

  const basket = await basketService.get({ basketModel, context });

  /*
   * Use a Crystallize order and the fulfilment pipelines to
   * manage the lifecycle of the order
   */
  const crystallizeOrder = await crystallize.orders.create({
    ...basket,
    customer: customerWithCurrentLoggedInUser,
  });

  return {
    success: true,
    orderId: crystallizeOrder.id,
  };
};
