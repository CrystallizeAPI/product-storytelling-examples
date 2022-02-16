const { getClient } = require("./utils");

module.exports = async function createPaymentIntent({
  confirm = false,
  amount,
  currency,
  paymentMethodId,
  email,
}) {
  const stripe = getClient();

  let stripeCustomer;
  const customerList = await stripe.customers.list({ email });
  if (customerList?.data?.length > 0) {
    stripeCustomer = customerList.data[0];
  } else {
    throw new Error("No Customer");
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    confirm,
    payment_method: paymentMethodId,
    customer: stripeCustomer.id,
  });

  return paymentIntent;
};
