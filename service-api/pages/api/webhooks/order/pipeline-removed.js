/**
 * This serverless function will be executed if you create
 * a webhook for this endpoint. Read more at:
 * https://crystallize.com/learn/developer-guides/webhooks
 */

import orderPipelineRemoved from "../../../../src/webhooks/order/pipeline-removed";

export default async function webhookOrderPipelineRemoved(req, res) {
  try {
    await orderPipelineRemoved(req.body);
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at orderPipelineRemoved webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
