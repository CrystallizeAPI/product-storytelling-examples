/**
 * This serverless function will be executed if you create
 * a webhook for this endpoint. Read more at:
 * https://crystallize.com/learn/developer-guides/webhooks
 */

import itemUnpublished from "../../../../src/webhooks/item/unpublished";

export default async function webhookItemUnpublished(req, res) {
  try {
    await itemUnpublished(req.body);
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at itemUnpublished webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
