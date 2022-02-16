module.exports = async function mollieSubscriptionRenewal({ mollieOrderId }) {
  const crystallize = require("../../crystallize");

  const { getClient, toCrystallizeOrderModel } = require("./utils");

  const mollieClient = await getClient();

  const mollieOrder = await mollieClient.payments.get(mollieOrderId);
  const { customerId } = mollieOrder;

  const mollieSubscription = await mollieClient.customers_subscriptions.get(
    mollieOrder.subscriptionId,
    { customerId }
  );

  const mollieCustomer = await mollieClient.customers.get(customerId);

  const validCrystallizeOrder = toCrystallizeOrderModel({
    mollieOrder: mollieSubscription,
    mollieCustomer,
  });

  await crystallize.orders.create(validCrystallizeOrder);
};
