/**
 * Proxying of the public tenant APIs
 * This is useful if you are protecting your APIs, read
 * more about that here:
 * https://crystallize.com/learn/developer-guides/api-overview/authentication
 *
 * In order to access protected API'sm you need to
 * attach additional headers to the request. You don't want
 * to do that in the frontend since the secret tokens can be
 * picked up by someone else
 */

import { callCatalogueApi } from "../../../src/services/crystallize/utils";
import cors from "../../../lib/cors";

async function CrystallizeAPIProxy(req, res) {
  const r = await callCatalogueApi(req.body);
  return res.json(r);
}

export default cors(CrystallizeAPIProxy);
