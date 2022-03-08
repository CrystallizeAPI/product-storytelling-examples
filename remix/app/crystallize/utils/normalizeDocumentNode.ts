import { DefinitionNode, DocumentNode, FragmentDefinitionNode } from "graphql";
import filter from "lodash/fp/filter";
import pipe from "lodash/fp/pipe";
import uniqBy from "lodash/fp/uniqBy";

export function isFragmentDefinition(
  def: DefinitionNode
): def is FragmentDefinitionNode {
  return def.kind === "FragmentDefinition";
}

export const notFragments = filter<DefinitionNode>(
  (def) => def.kind !== "FragmentDefinition"
);

export const onlyUniqueFragments = pipe(
  filter<DefinitionNode, FragmentDefinitionNode>(isFragmentDefinition),
  uniqBy<FragmentDefinitionNode>((def) => def.name)
);

export function normalizeDocumentNode(doc: DocumentNode): DocumentNode {
  if ("__normalized" in doc) return doc;

  return Object.assign(doc, {
    __normalized: true,
    definitions: [
      ...notFragments(doc.definitions),
      ...onlyUniqueFragments(doc.definitions),
    ],
  });
}
