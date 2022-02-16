const { callPimApi, getTenantId } = require("../utils");

module.exports = async function updateCustomer({ identifier, ...rest }) {
  const tenantId = await getTenantId();
  const response = await callPimApi({
    variables: {
      tenantId,
      identifier,
      ...rest,
    },
    query: `
      mutation updateCustomer(
        $tenantId: ID!
        $identifier: String!
        $customer: UpdateCustomerInput!
      ) {
        customer {
          update(
            tenantId: $tenantId
            identifier: $identifier
            input: $customer
          ) {
            identifier
          }
        }
      }
    `,
  });

  return response.data.customer.update;
};
