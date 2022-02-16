async function capturePaypalPayment(crystallizeOrderId) {
  const checkoutNodeJssdk = require("@paypal/checkout-server-sdk");

  const crystallize = require("../../crystallize");
  const { paypal: PaypalClient } = require("./init-client");

  try {
    const crystallizeOrder = await crystallize.orders.get(crystallizeOrderId);

    const paypalOrderId = crystallizeOrder.payment?.find(
      (p) => p.provider === "paypal"
    )?.orderId;
    if (paypalOrderId) {
      const PAYPAL_CAPTURE_ID = crystallizeOrder.meta?.find(
        (m) => m.key === "PAYPAL_CAPTURE_ID"
      )?.value;
      if (!PAYPAL_CAPTURE_ID) {
        throw new Error(
          `No captureId for ${JSON.stringify({
            crystallizeOrderId,
            paypalOrderId,
          })}`
        );
      }

      const request = new checkoutNodeJssdk.payments.CapturesRefundRequest(
        PAYPAL_CAPTURE_ID
      );
      request.requestBody({});
      const response = await PaypalClient().execute(request);

      const status = response.result.status;

      // Update Crystallize order with payment status
      await crystallize.orders.update(crystallizeOrderId, {
        meta: [
          {
            key: "PAYPAL_ORDER_STATUS",
            value: status,
          },
          {
            key: "PAYPAL_CAPTURE_ID",
            value: PAYPAL_CAPTURE_ID,
          },
          {
            key: "PAYPAL_REFUNDED",
            value: new Date().toISOString(),
          },
        ],
      });
    }
  } catch (err) {
    console.error(err);
    return {
      success: false,
    };
  }

  return {
    success: true,
  };
}

module.exports = capturePaypalPayment;
