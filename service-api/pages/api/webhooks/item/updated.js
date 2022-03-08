/**
 * This serverless function will be executed if you create
 * a webhook for this endpoint. Read more at:
 * https://crystallize.com/learn/developer-guides/webhooks
 */

import itemUpdated from "../../../../src/webhooks/item/updated";

export default async function webhookItemUpdated(req, res) {
  try {
    await itemUpdated(req.body);
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at itemUpdated webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
