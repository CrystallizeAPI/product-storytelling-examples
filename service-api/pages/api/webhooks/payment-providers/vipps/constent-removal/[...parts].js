/**
 * Callback used for when the user asks to get their user details revoked
 * instance, it will not be retried.
 * https://www.vipps.no/developers-documentation/ecom/documentation/#callback-endpoints
 *
 */

import vippsService from "../../../../../../src/services/payment-providers/vipps";

export default async function webhookVippsOrderUpdate(req, res) {
  const vippsUserId = req.query.parts[req.query.parts.length - 1];

  await vippsService.consentRemoval({ vippsUserId });

  res.send("ok");
}
