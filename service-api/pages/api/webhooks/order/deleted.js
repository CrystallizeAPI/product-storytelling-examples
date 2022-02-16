/**
 * This serverless function will be executed if you create
 * a webhook for this endpoint. Read more at:
 * https://crystallize.com/learn/developer-guides/webhooks
 */

import orderDeleted from "../../../../src/webhooks/order/deleted";

export default async function webhookOrderDeleted(req, res) {
  try {
    await orderDeleted(req.body);
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at orderDeleted webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
