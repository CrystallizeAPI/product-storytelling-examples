module.exports = async function vippsFallback({
  crystallizeOrderId,
  onSuccessURL,
  onErrorURL,
}) {
  const crystallize = require("../../crystallize");

  const { getClient } = require("./utils");

  let redirectTo = "";

  const vippsClient = await getClient();

  // Retrieve the Vipps order to get transaction details
  const order = await vippsClient.getOrderDetails({
    orderId: crystallizeOrderId,
  });
  const [lastTransactionLogEntry] = order.transactionLogHistory.sort(
    (a, b) => new Date(b.timeStamp) - new Date(a.timeStamp)
  );

  /**
   * If the transaction logs last entry has status
   * RESERVE, then the amount has been successfully
   * reserved on the user account, and we can show
   * the confirmation page
   */
  if (
    lastTransactionLogEntry.operation === "RESERVE" &&
    lastTransactionLogEntry.operationSuccess
  ) {
    redirectTo = onSuccessURL;

    /**
     * At this point we have user details from Vipps, which
     * makes it a good time to update the Crystallize order
     */
    const {
      userDetails: {
        userId,
        firstName,
        lastName,
        email,
        mobileNumber: phone,
      } = {},
      shippingDetails: {
        address: {
          addressLine1: street,
          addressLine2: street2,
          postCode: postalCode,
          city,
          country,
        } = {},
      } = {},
    } = order;

    await crystallize.orders.update(crystallizeOrderId, {
      payment: [
        {
          provider: "custom",
          custom: {
            properties: [
              {
                property: "PaymentProvider",
                value: "Vipps",
              },
              {
                property: "Vipps orderId",
                value: crystallizeOrderId,
              },
              {
                property: "Vipps userId",
                value: userId,
              },
            ],
          },
        },
      ],
      customer: {
        identifier: email,
        firstName,
        lastName,
        addresses: [
          {
            type: "delivery",
            email,
            firstName,
            lastName,
            phone,
            street,
            street2,
            postalCode,
            city,
            country,
          },
        ],
      },
    });
  } else {
    redirectTo = onErrorURL;
    console.log(JSON.stringify(lastTransactionLogEntry, null, 2));
  }

  return {
    redirectTo,
  };
};
