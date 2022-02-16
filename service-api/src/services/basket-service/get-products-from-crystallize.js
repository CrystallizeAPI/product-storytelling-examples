/**
 * Gets information for products using SKU for lookup.
 */
async function getProductsFromCrystallize({ skus, language }) {
  if (skus.length === 0) {
    return [];
  }

  const { callCatalogueApi, callSearchApi } = require("../crystallize/utils");

  const pathsSet = new Set();
  let searchAfterCursor;
  async function getNextSearchPage() {
    const searchAPIResponse = await callSearchApi({
      query: `
        query GET_PRODUCTS_BY_SKU ($skus: [String!], $after: String) {
          search (
            after: $after
            filter: {
              include: {
                skus: $skus
              }
            }
          ) {
            pageInfo {
              endCursor
              hasNextPage
            }
            edges {
              node {
                path
              }
            }
          }
        }
      `,
      variables: {
        skus,
        after: searchAfterCursor,
      },
    });

    const { edges, pageInfo } = searchAPIResponse.data?.search || {};

    edges?.forEach((edge) => pathsSet.add(edge.node.path));

    if (pageInfo?.hasNextPage) {
      searchAfterCursor = pageInfo.endCursor;
      await getNextSearchPage();
    }
  }

  await getNextSearchPage();

  /**
   * Enrich each product with more information
   * Gets all of the products with a single request
   * by composing the query dynamically
   */
  const paths = Array.from(pathsSet);
  const response = await callCatalogueApi({
    query: `{
      ${paths.map(
        (path, index) => `
        product${index}: catalogue(path: "${path}", language: "${language}") {
          path
          ... on Product {
            id
            vatType {
              name
              percent
            }
            variants {
              id
              sku
              name
              stock
              priceVariants {
                price
                identifier
                currency
              }
              attributes {
                attribute
                value
              }
              images {
                url
                variants {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      `
      )}
    }`,
  });

  return paths.map((_, i) => response.data[`product${i}`]).filter((p) => !!p);
}

module.exports = {
  getProductsFromCrystallize,
};
