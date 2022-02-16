/**
 * An example webhook for how to listen for Mollie order updates
 */

import mollieOrderUpdate from "../../../../../src/services/payment-providers/mollie/order-update";

export default async function webhookMollieOrderUpdate(req, res) {
  try {
    console.log("webhookMollieOrderUpdate", req.body.id);
    await mollieOrderUpdate({ mollieOrderId: req.body.id });
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at mollieOrderUpdate webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
