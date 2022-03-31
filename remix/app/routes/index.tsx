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
import { HttpCacheHeaderTagger } from "~/http-cache-header-tagger";

export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  // for the preview mode, if the query parameter preview=true is present, ask for the draft version
  const preview = url.searchParams.get("preview");
  const version = preview ? "draft" : "published";
  const path = "/frontpage";
  const data = await catalogueClient.request<FrontpageQuery>(
    normalizeDocumentNode(FrontpageDocument),
    { path, version }
  );

  return json(
    { ...data, path },
    HttpCacheHeaderTagger("30s", "1w", ["frontpage"])
  );
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

export function headers() {
  return HttpCacheHeaderTagger("1m", "1w", ["index"]).headers;
}

export default function Index() {
  let { catalogue, donuts } = useLoaderData();
  let { grid } = catalogue;

  const children = ({ cells }) => {
    return cells.map((cell, index) => (
      <div
        style={{
          gridColumn: `span ${cell.layout.colspan}`,
          gridRow: `span ${cell.layout.rowspan}`,
        }}
        id="grid-item"
        key={"cell" + index}
      >
        <GridItem cell={cell} />
      </div>
    ));
  };

  return (
    <div className="py-20">
      <div
        className="bg-background5 z-0 absolute left-0 right-0 bottom-0 rounded-tl-full rounded-tr-full"
        style={{
          top: "45%",
          zIndex: "-1",
        }}
      ></div>
      <Grid model={grid.content.grids[0]} className="gap-5">
        {children}
      </Grid>
      <Products donuts={donuts} />
    </div>
  );
}
