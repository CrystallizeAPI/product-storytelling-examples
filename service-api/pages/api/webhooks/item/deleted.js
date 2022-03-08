/**
 * This serverless function will be executed if you create
 * a webhook for this endpoint. Read more at:
 * https://crystallize.com/learn/developer-guides/webhooks
 */

import itemDeleted from "../../../../src/webhooks/item/deleted";

export default async function webhookItemDeleted(req, res) {
  try {
    await itemDeleted(req.body);
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at itemDeleted webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
