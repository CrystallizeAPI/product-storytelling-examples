const { callOrdersApi } = require("../utils");

module.exports = function waitForOrderToBePersistated({ id }) {
  let retries = 0;
  const maxRetries = 10;

  return new Promise((resolve, reject) => {
    (async function check() {
      const response = await callOrdersApi({
        query: `
          {
            orders {
              get(id: "${id}") {
                id
                createdAt
              }
            }
          }
        `,
      });

      if (response.data && response.data.orders.get) {
        resolve();
      } else {
        retries += 1;
        if (retries > maxRetries) {
          reject(
            `Timeout out waiting for Crystallize order "${id}" to be persisted`
          );
        } else {
          setTimeout(check, 1000);
        }
      }
    })();
  });
};
