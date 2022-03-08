// TODO: Add JSDoc comment
export const componentContent = <
  T extends { __typename?: string },
  V extends string & T["__typename"]
>(
  o: T,
  v: V
): Extract<T, Record<"__typename", V>> => {
  return o && o["__typename"] === v
    ? (o as Extract<T, Record<"__typename", V>>)
    : null;
};
