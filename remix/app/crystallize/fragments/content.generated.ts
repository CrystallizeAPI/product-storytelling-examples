import * as Types from '../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Content_BooleanContent_Fragment = (
  { __typename: 'BooleanContent' }
  & Pick<Types.BooleanContent, 'value'>
);

export type Content_ComponentChoiceContent_Fragment = { __typename?: 'ComponentChoiceContent' };

export type Content_ContentChunkContent_Fragment = { __typename?: 'ContentChunkContent' };

export type Content_DatetimeContent_Fragment = (
  { __typename: 'DatetimeContent' }
  & Pick<Types.DatetimeContent, 'datetime'>
);

export type Content_FileContent_Fragment = { __typename?: 'FileContent' };

export type Content_GridRelationsContent_Fragment = { __typename?: 'GridRelationsContent' };

export type Content_ImageContent_Fragment = (
  { __typename: 'ImageContent' }
  & { images?: Types.Maybe<Array<(
    { __typename: 'Image' }
    & Pick<Types.Image, 'url' | 'altText' | 'key'>
    & { variants?: Types.Maybe<Array<(
      { __typename?: 'ImageVariant' }
      & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
    )>> }
  )>> }
);

export type Content_ItemRelationsContent_Fragment = { __typename?: 'ItemRelationsContent' };

export type Content_LocationContent_Fragment = (
  { __typename: 'LocationContent' }
  & Pick<Types.LocationContent, 'lat' | 'long'>
);

export type Content_NumericContent_Fragment = (
  { __typename: 'NumericContent' }
  & Pick<Types.NumericContent, 'number' | 'unit'>
);

export type Content_ParagraphCollectionContent_Fragment = (
  { __typename: 'ParagraphCollectionContent' }
  & { paragraphs?: Types.Maybe<Array<(
    { __typename?: 'ParagraphContent' }
    & { title?: Types.Maybe<(
      { __typename: 'SingleLineContent' }
      & Pick<Types.SingleLineContent, 'text'>
    )>, body?: Types.Maybe<(
      { __typename: 'RichTextContent' }
      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
    )>, images?: Types.Maybe<Array<(
      { __typename: 'Image' }
      & Pick<Types.Image, 'url' | 'altText' | 'key'>
      & { caption?: Types.Maybe<(
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      )>, variants?: Types.Maybe<Array<(
        { __typename?: 'ImageVariant' }
        & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
      )>> }
    )>>, videos?: Types.Maybe<Array<(
      { __typename?: 'Video' }
      & Pick<Types.Video, 'title' | 'playlists'>
      & { thumbnails?: Types.Maybe<Array<(
        { __typename: 'Image' }
        & Pick<Types.Image, 'url' | 'altText' | 'key'>
        & { caption?: Types.Maybe<(
          { __typename: 'RichTextContent' }
          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
        )>, variants?: Types.Maybe<Array<(
          { __typename?: 'ImageVariant' }
          & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
        )>> }
      )>> }
    )>> }
  )>> }
);

export type Content_PropertiesTableContent_Fragment = (
  { __typename: 'PropertiesTableContent' }
  & { sections?: Types.Maybe<Array<(
    { __typename: 'PropertiesTableSection' }
    & Pick<Types.PropertiesTableSection, 'title'>
    & { properties?: Types.Maybe<Array<(
      { __typename?: 'PropertiesTableValue' }
      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
    )>> }
  )>> }
);

export type Content_RichTextContent_Fragment = (
  { __typename: 'RichTextContent' }
  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
);

export type Content_SelectionContent_Fragment = (
  { __typename: 'SelectionContent' }
  & { options?: Types.Maybe<Array<(
    { __typename?: 'SelectionComponentOption' }
    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
  )>> }
);

export type Content_SingleLineContent_Fragment = (
  { __typename: 'SingleLineContent' }
  & Pick<Types.SingleLineContent, 'text'>
);

export type Content_VideoContent_Fragment = (
  { __typename: 'VideoContent' }
  & { videos?: Types.Maybe<Array<(
    { __typename: 'Video' }
    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
    & { thumbnails?: Types.Maybe<Array<(
      { __typename: 'Image' }
      & Pick<Types.Image, 'url' | 'altText' | 'key'>
      & { variants?: Types.Maybe<Array<(
        { __typename?: 'ImageVariant' }
        & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
      )>> }
    )>> }
  )>> }
);

export type ContentFragment = Content_BooleanContent_Fragment | Content_ComponentChoiceContent_Fragment | Content_ContentChunkContent_Fragment | Content_DatetimeContent_Fragment | Content_FileContent_Fragment | Content_GridRelationsContent_Fragment | Content_ImageContent_Fragment | Content_ItemRelationsContent_Fragment | Content_LocationContent_Fragment | Content_NumericContent_Fragment | Content_ParagraphCollectionContent_Fragment | Content_PropertiesTableContent_Fragment | Content_RichTextContent_Fragment | Content_SelectionContent_Fragment | Content_SingleLineContent_Fragment | Content_VideoContent_Fragment;

export type ContentChunkFragment = (
  { __typename: 'ContentChunkContent' }
  & { chunks: Array<Array<(
    { __typename?: 'Component' }
    & { content?: Types.Maybe<(
      { __typename: 'BooleanContent' }
      & Pick<Types.BooleanContent, 'value'>
    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
      { __typename: 'DatetimeContent' }
      & Pick<Types.DatetimeContent, 'datetime'>
    ) | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | (
      { __typename: 'ImageContent' }
      & { images?: Types.Maybe<Array<(
        { __typename: 'Image' }
        & Pick<Types.Image, 'url' | 'altText' | 'key'>
        & { variants?: Types.Maybe<Array<(
          { __typename?: 'ImageVariant' }
          & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
        )>> }
      )>> }
    ) | { __typename?: 'ItemRelationsContent' } | (
      { __typename: 'LocationContent' }
      & Pick<Types.LocationContent, 'lat' | 'long'>
    ) | (
      { __typename: 'NumericContent' }
      & Pick<Types.NumericContent, 'number' | 'unit'>
    ) | (
      { __typename: 'ParagraphCollectionContent' }
      & { paragraphs?: Types.Maybe<Array<(
        { __typename?: 'ParagraphContent' }
        & { title?: Types.Maybe<(
          { __typename: 'SingleLineContent' }
          & Pick<Types.SingleLineContent, 'text'>
        )>, body?: Types.Maybe<(
          { __typename: 'RichTextContent' }
          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
        )>, images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { caption?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
          )>> }
        )>>, videos?: Types.Maybe<Array<(
          { __typename?: 'Video' }
          & Pick<Types.Video, 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
            )>> }
          )>> }
        )>> }
      )>> }
    ) | (
      { __typename: 'PropertiesTableContent' }
      & { sections?: Types.Maybe<Array<(
        { __typename: 'PropertiesTableSection' }
        & Pick<Types.PropertiesTableSection, 'title'>
        & { properties?: Types.Maybe<Array<(
          { __typename?: 'PropertiesTableValue' }
          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
        )>> }
      )>> }
    ) | (
      { __typename: 'RichTextContent' }
      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
    ) | (
      { __typename: 'SelectionContent' }
      & { options?: Types.Maybe<Array<(
        { __typename?: 'SelectionComponentOption' }
        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
      )>> }
    ) | (
      { __typename: 'SingleLineContent' }
      & Pick<Types.SingleLineContent, 'text'>
    ) | (
      { __typename: 'VideoContent' }
      & { videos?: Types.Maybe<Array<(
        { __typename: 'Video' }
        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
        & { thumbnails?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
          )>> }
        )>> }
      )>> }
    )> }
  )>> }
);

export type ComponentFragment = (
  { __typename: 'Component' }
  & { content?: Types.Maybe<(
    { __typename: 'BooleanContent' }
    & Pick<Types.BooleanContent, 'value'>
  ) | { __typename?: 'ComponentChoiceContent' } | (
    { __typename: 'ContentChunkContent' }
    & { chunks: Array<Array<(
      { __typename?: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
            )>> }
          )>>, videos?: Types.Maybe<Array<(
            { __typename?: 'Video' }
            & Pick<Types.Video, 'title' | 'playlists'>
            & { thumbnails?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { caption?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
              )>> }
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
            )>> }
          )>> }
        )>> }
      )> }
    )>> }
  ) | (
    { __typename: 'DatetimeContent' }
    & Pick<Types.DatetimeContent, 'datetime'>
  ) | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | (
    { __typename: 'ImageContent' }
    & { images?: Types.Maybe<Array<(
      { __typename: 'Image' }
      & Pick<Types.Image, 'url' | 'altText' | 'key'>
      & { variants?: Types.Maybe<Array<(
        { __typename?: 'ImageVariant' }
        & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
      )>> }
    )>> }
  ) | { __typename?: 'ItemRelationsContent' } | (
    { __typename: 'LocationContent' }
    & Pick<Types.LocationContent, 'lat' | 'long'>
  ) | (
    { __typename: 'NumericContent' }
    & Pick<Types.NumericContent, 'number' | 'unit'>
  ) | (
    { __typename: 'ParagraphCollectionContent' }
    & { paragraphs?: Types.Maybe<Array<(
      { __typename?: 'ParagraphContent' }
      & { title?: Types.Maybe<(
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      )>, body?: Types.Maybe<(
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      )>, images?: Types.Maybe<Array<(
        { __typename: 'Image' }
        & Pick<Types.Image, 'url' | 'altText' | 'key'>
        & { caption?: Types.Maybe<(
          { __typename: 'RichTextContent' }
          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
        )>, variants?: Types.Maybe<Array<(
          { __typename?: 'ImageVariant' }
          & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
        )>> }
      )>>, videos?: Types.Maybe<Array<(
        { __typename?: 'Video' }
        & Pick<Types.Video, 'title' | 'playlists'>
        & { thumbnails?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { caption?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
          )>> }
        )>> }
      )>> }
    )>> }
  ) | (
    { __typename: 'PropertiesTableContent' }
    & { sections?: Types.Maybe<Array<(
      { __typename: 'PropertiesTableSection' }
      & Pick<Types.PropertiesTableSection, 'title'>
      & { properties?: Types.Maybe<Array<(
        { __typename?: 'PropertiesTableValue' }
        & Pick<Types.PropertiesTableValue, 'key' | 'value'>
      )>> }
    )>> }
  ) | (
    { __typename: 'RichTextContent' }
    & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
  ) | (
    { __typename: 'SelectionContent' }
    & { options?: Types.Maybe<Array<(
      { __typename?: 'SelectionComponentOption' }
      & Pick<Types.SelectionComponentOption, 'key' | 'value'>
    )>> }
  ) | (
    { __typename: 'SingleLineContent' }
    & Pick<Types.SingleLineContent, 'text'>
  ) | (
    { __typename: 'VideoContent' }
    & { videos?: Types.Maybe<Array<(
      { __typename: 'Video' }
      & Pick<Types.Video, 'id' | 'title' | 'playlists'>
      & { thumbnails?: Types.Maybe<Array<(
        { __typename: 'Image' }
        & Pick<Types.Image, 'url' | 'altText' | 'key'>
        & { variants?: Types.Maybe<Array<(
          { __typename?: 'ImageVariant' }
          & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
        )>> }
      )>> }
    )>> }
  )> }
);

export type SingleLineFragment = (
  { __typename: 'SingleLineContent' }
  & Pick<Types.SingleLineContent, 'text'>
);

export type RichTextFragment = (
  { __typename: 'RichTextContent' }
  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
);

export type BooleanFragment = (
  { __typename: 'BooleanContent' }
  & Pick<Types.BooleanContent, 'value'>
);

export type NumericFragment = (
  { __typename: 'NumericContent' }
  & Pick<Types.NumericContent, 'number' | 'unit'>
);

export type LocationFragment = (
  { __typename: 'LocationContent' }
  & Pick<Types.LocationContent, 'lat' | 'long'>
);

export type DateTimeFragment = (
  { __typename: 'DatetimeContent' }
  & Pick<Types.DatetimeContent, 'datetime'>
);

export type SelectionFragment = (
  { __typename: 'SelectionContent' }
  & { options?: Types.Maybe<Array<(
    { __typename?: 'SelectionComponentOption' }
    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
  )>> }
);

export type ImagesFragment = (
  { __typename: 'ImageContent' }
  & { images?: Types.Maybe<Array<(
    { __typename: 'Image' }
    & Pick<Types.Image, 'url' | 'altText' | 'key'>
    & { variants?: Types.Maybe<Array<(
      { __typename?: 'ImageVariant' }
      & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
    )>> }
  )>> }
);

export type ImageFragment = (
  { __typename: 'Image' }
  & Pick<Types.Image, 'url' | 'altText' | 'key'>
  & { variants?: Types.Maybe<Array<(
    { __typename?: 'ImageVariant' }
    & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
  )>> }
);

export type VideosFragment = (
  { __typename: 'VideoContent' }
  & { videos?: Types.Maybe<Array<(
    { __typename: 'Video' }
    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
    & { thumbnails?: Types.Maybe<Array<(
      { __typename: 'Image' }
      & Pick<Types.Image, 'url' | 'altText' | 'key'>
      & { variants?: Types.Maybe<Array<(
        { __typename?: 'ImageVariant' }
        & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
      )>> }
    )>> }
  )>> }
);

export type VideoFragment = (
  { __typename: 'Video' }
  & Pick<Types.Video, 'id' | 'title' | 'playlists'>
  & { thumbnails?: Types.Maybe<Array<(
    { __typename: 'Image' }
    & Pick<Types.Image, 'url' | 'altText' | 'key'>
    & { variants?: Types.Maybe<Array<(
      { __typename?: 'ImageVariant' }
      & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
    )>> }
  )>> }
);

export type ParagraphCollectionFragment = (
  { __typename: 'ParagraphCollectionContent' }
  & { paragraphs?: Types.Maybe<Array<(
    { __typename?: 'ParagraphContent' }
    & { title?: Types.Maybe<(
      { __typename: 'SingleLineContent' }
      & Pick<Types.SingleLineContent, 'text'>
    )>, body?: Types.Maybe<(
      { __typename: 'RichTextContent' }
      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
    )>, images?: Types.Maybe<Array<(
      { __typename: 'Image' }
      & Pick<Types.Image, 'url' | 'altText' | 'key'>
      & { caption?: Types.Maybe<(
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      )>, variants?: Types.Maybe<Array<(
        { __typename?: 'ImageVariant' }
        & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
      )>> }
    )>>, videos?: Types.Maybe<Array<(
      { __typename?: 'Video' }
      & Pick<Types.Video, 'title' | 'playlists'>
      & { thumbnails?: Types.Maybe<Array<(
        { __typename: 'Image' }
        & Pick<Types.Image, 'url' | 'altText' | 'key'>
        & { caption?: Types.Maybe<(
          { __typename: 'RichTextContent' }
          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
        )>, variants?: Types.Maybe<Array<(
          { __typename?: 'ImageVariant' }
          & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
        )>> }
      )>> }
    )>> }
  )>> }
);

export type PropertiesTableFragment = (
  { __typename: 'PropertiesTableContent' }
  & { sections?: Types.Maybe<Array<(
    { __typename: 'PropertiesTableSection' }
    & Pick<Types.PropertiesTableSection, 'title'>
    & { properties?: Types.Maybe<Array<(
      { __typename?: 'PropertiesTableValue' }
      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
    )>> }
  )>> }
);

export const SingleLineFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"singleLine"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SingleLineContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<SingleLineFragment, unknown>;
export const RichTextFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"richText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"plainText"}}]}}]} as unknown as DocumentNode<RichTextFragment, unknown>;
export const BooleanFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"boolean"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BooleanContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<BooleanFragment, unknown>;
export const NumericFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"numeric"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NumericContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}}]}}]} as unknown as DocumentNode<NumericFragment, unknown>;
export const LocationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"location"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"long"}}]}}]} as unknown as DocumentNode<LocationFragment, unknown>;
export const DateTimeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"dateTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DatetimeContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"datetime"}}]}}]} as unknown as DocumentNode<DateTimeFragment, unknown>;
export const SelectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"selection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SelectionContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SelectionFragment, unknown>;
export const ImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]} as unknown as DocumentNode<ImageFragment, unknown>;
export const ImagesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"images"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}}]}},...ImageFragmentDoc.definitions]} as unknown as DocumentNode<ImagesFragment, unknown>;
export const VideoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"video"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}}]}},...ImageFragmentDoc.definitions]} as unknown as DocumentNode<VideoFragment, unknown>;
export const VideosFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"videos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"videos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"video"}}]}}]}},...VideoFragmentDoc.definitions]} as unknown as DocumentNode<VideosFragment, unknown>;
export const ParagraphCollectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"paragraphCollection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCollectionContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"paragraphs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"singleLine"}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"richText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"caption"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"richText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"videos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"caption"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"richText"}}]}}]}}]}}]}}]}},...SingleLineFragmentDoc.definitions,...RichTextFragmentDoc.definitions,...ImageFragmentDoc.definitions]} as unknown as DocumentNode<ParagraphCollectionFragment, unknown>;
export const PropertiesTableFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"propertiesTable"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertiesTableContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertiesTableSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PropertiesTableFragment, unknown>;
export const ContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"content"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"singleLine"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"richText"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"boolean"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"numeric"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"location"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"dateTime"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"selection"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"images"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"videos"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"paragraphCollection"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"propertiesTable"}}]}},...SingleLineFragmentDoc.definitions,...RichTextFragmentDoc.definitions,...BooleanFragmentDoc.definitions,...NumericFragmentDoc.definitions,...LocationFragmentDoc.definitions,...DateTimeFragmentDoc.definitions,...SelectionFragmentDoc.definitions,...ImagesFragmentDoc.definitions,...VideosFragmentDoc.definitions,...ParagraphCollectionFragmentDoc.definitions,...PropertiesTableFragmentDoc.definitions]} as unknown as DocumentNode<ContentFragment, unknown>;
export const ContentChunkFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"contentChunk"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentChunkContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"chunks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"content"}}]}}]}}]}},...ContentFragmentDoc.definitions]} as unknown as DocumentNode<ContentChunkFragment, unknown>;
export const ComponentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"component"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Component"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"content"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"contentChunk"}}]}}]}},...ContentFragmentDoc.definitions,...ContentChunkFragmentDoc.definitions]} as unknown as DocumentNode<ComponentFragment, unknown>;