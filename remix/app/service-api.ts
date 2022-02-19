export default async function serviceApi({
  uri = `https://product-storytelling-service-api.vercel.app/api/graphql`,
  query,
  variables,
}) {
  const body = JSON.stringify({ query, variables });

  const response = await fetch(uri, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const json = await response.json();

  if (json.errors) {
    console.error("Service API encountered an error", json.errors);
  }

  return json;
}
