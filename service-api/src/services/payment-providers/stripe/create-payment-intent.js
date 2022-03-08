module.exports = async function createPaymentIntent({
  checkoutModel,
  confirm = false,
  paymentMethodId,
  context,
}) {
  const basketService = require("../../basket-service");
  const { getClient } = require("./utils");

  const stripe = getClient();

  const { basketModel, customer } = checkoutModel;
  const email = customer.addresses[0].email;

  const basket = await basketService.get({ basketModel, context });

  let stripeCustomer;
  const customerList = await stripe.customers.list({ email });
  if (customerList?.data?.length > 0) {
    stripeCustomer = customerList.data[0];
  } else {
    stripeCustomer = await stripe.customers.create({
      email,
      name: `${customer.firstName} ${customer.lastName}`,
    });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: basket.total.gross * 100,
    currency: basket.total.currency,
    confirm,
    payment_method: paymentMethodId,
    setup_future_usage: "off_session",
    customer: stripeCustomer.id,
  });

  return paymentIntent;
};
