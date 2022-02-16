const { callOrdersApi } = require("../utils");

module.exports = async function getOrder(id) {
  const response = await callOrdersApi({
    variables: {
      id,
    },
    query: `
      query getOrder($id: ID!){
        orders {
          get(id: $id) {
            id
            total {
              net
              gross
              currency
              tax {
                name
                percent
              }
            }
            meta {
              key
              value
            }
            additionalInformation
            payment {
              ... on StripePayment {
                provider
                paymentMethod
              }
              ... on PaypalPayment {
                provider
                orderId
              }
              ... on CustomPayment {
                provider
                properties {
                  property
                  value
                }
              }
              ... on KlarnaPayment {
                provider
                orderId
              }
            }
            cart {
              sku
              name
              quantity
              imageUrl
              price {
                net
                gross
                currency
              }
              meta {
                key
                value
              }
            }
            customer {
              firstName
              lastName
              addresses {
                type
                email
              }
            }
          }
        }
      }
    `,
  });

  return response.data?.orders?.get;
};
