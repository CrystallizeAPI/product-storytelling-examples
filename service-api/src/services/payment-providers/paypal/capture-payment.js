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
      const PAYPAL_ORDER_STATUS = crystallizeOrder.meta?.find(
        (m) => m.key === "PAYPAL_ORDER_STATUS"
      )?.value;

      if (PAYPAL_ORDER_STATUS === "APPROVED") {
        const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(
          paypalOrderId
        );
        request.requestBody({});
        const response = await PaypalClient().execute(request);

        const status = response.result.status;

        const captureId =
          response.result.purchase_units?.[0]?.payments?.captures?.[0]?.id ||
          "N/A";

        // Update Crystallize order with payment status
        await crystallize.orders.update(crystallizeOrderId, {
          meta: [
            {
              key: "PAYPAL_ORDER_STATUS",
              value: status,
            },
            {
              key: "PAYPAL_CAPTURE_ID",
              value: captureId,
            },
          ],
        });
      }
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
