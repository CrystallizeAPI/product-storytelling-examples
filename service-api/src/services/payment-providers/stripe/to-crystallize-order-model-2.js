module.exports = function stripeToCrystallizeOrderModel({
  customer,
  product,
  payment,
  paymentIntent,
}) {
  const {
    paymentToPaymentInput,
    createBasket,
  } = require("../../crystallize/utils");

  const totalValue = paymentIntent.amount / 100;
  const currency = String(paymentIntent.currency).toUpperCase();
  const basket = createBasket({ totalValue, currency, product });

  return {
    total: basket.total,
    cart: basket.cart,
    customer: {
      identifier: customer.identifier,
      firstName: customer.firstName,
      lastName: customer.lastName,
      addresses: [{ type: "billing", email: customer.identifier }],
    },
    payment: [paymentToPaymentInput(payment)],
  };
};
