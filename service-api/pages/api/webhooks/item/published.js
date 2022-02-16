/**
 * This serverless function will be executed if you create
 * a webhook for this endpoint. Read more at:
 * https://crystallize.com/learn/developer-guides/webhooks
 */

import itemPublished from "../../../../src/webhooks/item/published";

export default async function webhookItemPublished(req, res) {
  try {
    await itemPublished(req.body);
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at itemPublished webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
