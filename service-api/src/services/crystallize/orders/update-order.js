const { callPimApi, normaliseOrderModel } = require("../utils");

module.exports = async function updateOrder(id, variables) {
  const response = await callPimApi({
    variables: {
      id,
      input: normaliseOrderModel(variables),
    },
    query: `
      mutation updateOrder(
        $id: ID!
        $input: UpdateOrderInput!
      ) {
        order {
            update(
            id: $id,
            input: $input
          ) {
            id
          }
        }
      }
  `,
  });

  return response.data.order.update;
};
