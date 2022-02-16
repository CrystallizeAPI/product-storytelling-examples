const { callPimApi } = require("../utils");

module.exports = async function updateStock(item) {
    console.log(item)
  const response = await callPimApi({
    variables: {
      productId: item.id,
      sku: item.sku,
      stock: item.stock - item.quantity,
    },
    query: `
        mutation SET_STOCK(
            $productId: ID!
            $sku: String!
            $stock: Int!
          ) {
            product {
                updateStock(
                  productId: $productId
                  sku: $sku
                  stock: $stock
                  stockLocationIdentifier: "default"
                ) {
                stock
              }
            }
          } 
        `,
  });
  return response.data.product.updateStock.stock;
};
