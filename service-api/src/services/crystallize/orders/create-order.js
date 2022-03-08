const { callOrdersApi, normaliseOrderModel } = require("../utils");

module.exports = async function createOrder(variables) {
  const response = await callOrdersApi({
    variables: normaliseOrderModel(variables),
    query: `
      mutation createOrder(
        $customer: CustomerInput!
        $cart: [OrderItemInput!]!
        $total: PriceInput
        $payment: [PaymentInput!]
        $additionalInformation: String
        $meta: [OrderMetadataInput!]
      ) {
        orders {
          create(
            input: {
              customer: $customer
              cart: $cart
              total: $total
              payment: $payment
              additionalInformation: $additionalInformation
              meta: $meta
            }
          ) {
            id
          }
        }
      }
    `,
  });

  return response.data.orders.create;
};
