

const FRONT_HOST = 'donutsh.milliseconds.live';

function makePurgeRequest(host, path) {
  return fetch(
    `https://${host}${path}`,
    {
      method: "PURGE",
      headers: {
        'Fastly-Soft-Purge': '1'
      },
    }
  )
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
};

module.exports = async function itemPublished(payload) {
  console.log("Webhook payload: itemPublished");
  console.log(JSON.stringify(payload, null, 2));
  const purgePath = payload.item.get.tree.path;
  console.log(purgePath);

  let purgeRequests = [];
  purgeRequests.push(makePurgeRequest(FRONT_HOST, "/"));
  purgeRequests.push(makePurgeRequest(FRONT_HOST, purgePath));

  let relatingItems = payload.item.get?.relatingItems;
  for (let item in relatingItems) {
    purgeRequests.push(makePurgeRequest(FRONT_HOST, relatingItems[item].tree?.path));
  }
  await Promise.all(purgeRequests);
};
