import { useLoaderData, json, LoaderFunction, MetaFunction } from "remix";
import { catalogueClient } from "../../clients";
import {
  ProductDocument,
  ProductQuery,
} from "../../crystallize/queries/product.generated";
import { normalizeDocumentNode } from "../../crystallize/utils/normalizeDocumentNode";
import { Product } from "../../components/product";
import { componentContent } from "../../crystallize/utils/componentContent";

export let loader: LoaderFunction = async ({ params }) => {
  const path = "/shop/" + params.product;
  const data = await catalogueClient.request<ProductQuery>(
    normalizeDocumentNode(ProductDocument),
    { path }
  );

  return json({ ...data, path });
};

export let meta: MetaFunction = ({ data }) => {
  let { product } = data;
  let description = componentContent(product?.summary?.content, "RichTextContent")
    ?.plainText[0];
    let image = product?.defaultVariant?.firstImage.url

  return {
    title: `${product?.name} | Dounut`,
    description: `${description}`,
    "og:description": `${description}`,
    "og:image": `${image}`,
  };
};

export default function Index() {
  let data = useLoaderData();
  console.log(data)
  return (
    <div>
      <div
        className="bg-background5 z-0 absolute left-0 right-0 rounded-full"
        style={{
          bottom: "10%",
          top: "20%",
          zIndex: "-1",
        }}
      ></div>
      <Product product={data.product} />
    </div>
  );
}
