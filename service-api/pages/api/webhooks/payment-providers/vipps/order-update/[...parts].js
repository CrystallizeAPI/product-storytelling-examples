/**
 * Callback used for notifying _once_ after the Vipps checkout is completed
 * It might never be called. If the request fails due to network connection for
 * instance, it will not be retried.
 * https://www.vipps.no/developers-documentation/ecom/documentation/#callback-endpoints
 *
 * If your callbackPrefix is https://example.com/vipps/callback and your
 * crystallizeOrderId is order123abc, Vipps will make a callback call to
 * https://example.com/vipps/callback/v2/payments/order123abc.
 */

import vippsService from "../../../../../../src/services/payment-providers/vipps";

export default async function webhookVippsOrderUpdate(req, res) {
  const crystallizeOrderId = req.query.parts[req.query.parts.length - 1];

  await vippsService.orderUpdate({ crystallizeOrderId });

  res.send("ok");
}
