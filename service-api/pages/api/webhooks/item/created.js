/**
 * This serverless function will be executed if you create
 * a webhook for this endpoint. Read more at:
 * https://crystallize.com/learn/developer-guides/webhooks
 */

import itemCreated from "../../../../src/webhooks/item/created";

export default async function webhookItemCreated(req, res) {
  try {
    await itemCreated(req.body);
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at itemCreated webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
