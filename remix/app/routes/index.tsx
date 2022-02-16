import { useLoaderData, json, LoaderFunction, MetaFunction } from "remix";
import { catalogueClient } from "../clients";
import {
  FrontpageDocument,
  FrontpageQuery,
} from "../crystallize/queries/frontpage.generated";
import { normalizeDocumentNode } from "../crystallize/utils/normalizeDocumentNode";
import Grid from "@crystallize/grid-renderer/react";
import { GridItem } from "../components/grid-item";
import { Products } from "../components/products";
import { componentContent } from "../crystallize/utils/componentContent";

export let loader: LoaderFunction = async () => {
  const path = "/frontpage";
  const data = await catalogueClient.request<FrontpageQuery>(
    normalizeDocumentNode(FrontpageDocument),
    { path }
  );

  return json({ ...data, path });
};

export let meta: MetaFunction = ({ data }) => {
  let {
    catalogue: { meta },
  } = data;
  let metaData = componentContent(meta.content, "ContentChunkContent")
    .chunks[0];

  return {
    title: `${componentContent(metaData[0].content, "SingleLineContent").text}`,
    description: `${
      componentContent(metaData[1].content, "RichTextContent").plainText[0]
    }`,
    "og:image": `${
      componentContent(metaData[2].content, "ImageContent")?.images[0]?.url
    }`,
  };
};

export default function Index() {
  let { catalogue, donuts } = useLoaderData();
  let { grid } = catalogue;

  return (
    <div className="py-20">
      <div
        className="bg-background5 z-0 absolute left-0 right-0 bottom-0 rounded-tl-full rounded-tr-full"
        style={{
          top: "45%",
          zIndex: "-1",
        }}
      ></div>
      <Grid
        model={grid.content.grids[0]}
        cellComponent={({ cell }) => <GridItem cell={cell} />}
        className="gap-3"
      />
      <Products donuts={donuts} />
    </div>
  );
}
