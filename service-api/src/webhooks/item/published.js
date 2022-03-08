module.exports = async function itemPublished(payload) {
  console.log("Webhook payload: itemPublished");
  console.log(JSON.stringify(payload, null, 2));

  let purgePath = payload.item.get.tree.path;
  let paths = ["/", purgePath];
  console.log(purgePath);
  let relatingItems = payload.item.get?.relatingItems;

  for (let item in relatingItems) {
    paths.push(relatingItems[item].tree?.path);
  }

  for (let path in paths) {
    const purgeRequest = await fetch(
      `https://dounot.milliseconds.live${paths[path]}`,
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
  }
};
