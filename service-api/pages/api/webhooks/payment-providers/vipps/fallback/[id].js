/**
 * Vipps fallback webhook
 * https://www.vipps.no/developers-documentation/ecom/documentation/#api-endpoints
 */

import vippsService from "../../../../../../src/services/payment-providers/vipps";

export default async function webhookVippsFallback(req, res) {
  try {
    const crystallizeOrderId = req.query.id;

    const onSuccessURL = decodeURIComponent(req.query.confirmation);
    const onErrorURL = decodeURIComponent(req.query.checkout);

    const { redirectTo } = await vippsService.fallback({
      crystallizeOrderId,
      onSuccessURL,
      onErrorURL,
    });
    res.writeHead(307, {
      Location: redirectTo,
    });
    res.end();
  } catch (e) {
    console.log("Error at vippsFallback webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
