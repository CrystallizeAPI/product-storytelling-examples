const { callPimApi, getTenantId } = require("../utils");

module.exports = async function createCustomer(customer) {
  const tenantId = await getTenantId();
  const response = await callPimApi({
    variables: {
      input: {
        tenantId,
        ...customer,
      },
    },
    query: `
      mutation createCustomer(
        $input: CreateCustomerInput!
      ) {
        customer {
          create(
            input: $input
          ) {
            identifier
          }
        }
      }
    `,
  });

  return response.data.customer.create;
};
