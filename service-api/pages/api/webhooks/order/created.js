/**
 * This serverless function will be executed if you create
 * a webhook for this endpoint. Read more at:
 * https://crystallize.com/learn/developer-guides/webhooks
 */

import orderCreated from "../../../../src/webhooks/order/created";

export default async function webhookOrderCreated(req, res) {
  try {
    const response = await orderCreated(req.body);
    res.status(200).send(response);
  } catch (e) {
    console.log("Error at orderCreated webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
