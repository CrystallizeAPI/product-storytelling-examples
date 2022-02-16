module.exports = async function mollieOrderUpdate({ mollieOrderId }) {
  const crystallize = require("../../crystallize");
  const { getClient } = require("./utils");
  const toCrystallizeOrderModel = require("./to-crystallize-order-model");

  const mollieClient = await getClient();

  const mollieOrder = await mollieClient.payments.get(mollieOrderId);

  const mollieCustomer = await mollieClient.customers.get(
    mollieOrder.customerId
  );

  const validCrystallizeOrder = toCrystallizeOrderModel({
    mollieOrder,
    mollieCustomer,
  });

  const { crystallizeOrderId } = mollieOrder.metadata;

  await crystallize.orders.waitForOrderToBePersistated({
    id: crystallizeOrderId,
  });

  await crystallize.orders.update(crystallizeOrderId, validCrystallizeOrder);
};
