import * as Types from '../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ComponentFragmentDoc, BooleanFragmentDoc, ImageFragmentDoc } from '../fragments/content.generated';
export type ProductQueryVariables = Types.Exact<{
  path: Types.Scalars['String'];
  version?: Types.InputMaybe<Types.VersionLabel>;
}>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { product?: Types.Maybe<(
    { __typename?: 'Document' }
    & { summary?: Types.Maybe<(
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
    )>, body?: Types.Maybe<(
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
    )>, table?: Types.Maybe<(
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
    )>, related?: Types.Maybe<(
      { __typename?: 'Component' }
      & { content?: Types.Maybe<{ __typename: 'BooleanContent' } | { __typename: 'ComponentChoiceContent' } | { __typename: 'ContentChunkContent' } | { __typename: 'DatetimeContent' } | { __typename: 'FileContent' } | { __typename: 'GridRelationsContent' } | { __typename: 'ImageContent' } | (
        { __typename: 'ItemRelationsContent' }
        & { items?: Types.Maybe<Array<(
          { __typename?: 'Document' }
          & Pick<Types.Document, 'path' | 'name'>
          & { topics?: Types.Maybe<Array<(
            { __typename?: 'Topic' }
            & Pick<Types.Topic, 'name'>
          )>> }
        ) | (
          { __typename?: 'Folder' }
          & Pick<Types.Folder, 'path' | 'name'>
          & { topics?: Types.Maybe<Array<(
            { __typename?: 'Topic' }
            & Pick<Types.Topic, 'name'>
          )>> }
        ) | (
          { __typename: 'Product' }
          & Pick<Types.Product, 'path' | 'name'>
          & { defaultVariant?: Types.Maybe<(
            { __typename?: 'ProductVariant' }
            & Pick<Types.ProductVariant, 'price'>
            & { firstImage?: Types.Maybe<(
              { __typename?: 'Image' }
              & Pick<Types.Image, 'url' | 'altText'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
              )>> }
            )> }
          )>, topics?: Types.Maybe<Array<(
            { __typename?: 'Topic' }
            & Pick<Types.Topic, 'name'>
          )>> }
        )>> }
      ) | { __typename: 'LocationContent' } | { __typename: 'NumericContent' } | { __typename: 'ParagraphCollectionContent' } | { __typename: 'PropertiesTableContent' } | { __typename: 'RichTextContent' } | { __typename: 'SelectionContent' } | { __typename: 'SingleLineContent' } | { __typename: 'VideoContent' }> }
    )> }
  ) | (
    { __typename?: 'Folder' }
    & { summary?: Types.Maybe<(
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
    )>, body?: Types.Maybe<(
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
    )>, table?: Types.Maybe<(
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
    )>, related?: Types.Maybe<(
      { __typename?: 'Component' }
      & { content?: Types.Maybe<{ __typename: 'BooleanContent' } | { __typename: 'ComponentChoiceContent' } | { __typename: 'ContentChunkContent' } | { __typename: 'DatetimeContent' } | { __typename: 'FileContent' } | { __typename: 'GridRelationsContent' } | { __typename: 'ImageContent' } | (
        { __typename: 'ItemRelationsContent' }
        & { items?: Types.Maybe<Array<(
          { __typename?: 'Document' }
          & Pick<Types.Document, 'path' | 'name'>
          & { topics?: Types.Maybe<Array<(
            { __typename?: 'Topic' }
            & Pick<Types.Topic, 'name'>
          )>> }
        ) | (
          { __typename?: 'Folder' }
          & Pick<Types.Folder, 'path' | 'name'>
          & { topics?: Types.Maybe<Array<(
            { __typename?: 'Topic' }
            & Pick<Types.Topic, 'name'>
          )>> }
        ) | (
          { __typename: 'Product' }
          & Pick<Types.Product, 'path' | 'name'>
          & { defaultVariant?: Types.Maybe<(
            { __typename?: 'ProductVariant' }
            & Pick<Types.ProductVariant, 'price'>
            & { firstImage?: Types.Maybe<(
              { __typename?: 'Image' }
              & Pick<Types.Image, 'url' | 'altText'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
              )>> }
            )> }
          )>, topics?: Types.Maybe<Array<(
            { __typename?: 'Topic' }
            & Pick<Types.Topic, 'name'>
          )>> }
        )>> }
      ) | { __typename: 'LocationContent' } | { __typename: 'NumericContent' } | { __typename: 'ParagraphCollectionContent' } | { __typename: 'PropertiesTableContent' } | { __typename: 'RichTextContent' } | { __typename: 'SelectionContent' } | { __typename: 'SingleLineContent' } | { __typename: 'VideoContent' }> }
    )> }
  ) | (
    { __typename: 'Product' }
    & Pick<Types.Product, 'id' | 'name' | 'type' | 'path'>
    & { defaultVariant?: Types.Maybe<(
      { __typename?: 'ProductVariant' }
      & { firstImage?: Types.Maybe<(
        { __typename?: 'Image' }
        & Pick<Types.Image, 'url' | 'altText'>
        & { variants?: Types.Maybe<Array<(
          { __typename?: 'ImageVariant' }
          & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
        )>> }
      )> }
    )>, variants?: Types.Maybe<Array<(
      { __typename?: 'ProductVariant' }
      & Pick<Types.ProductVariant, 'id' | 'name' | 'sku' | 'price' | 'stock' | 'isDefault'>
      & { priceVariants?: Types.Maybe<Array<(
        { __typename?: 'ProductPriceVariant' }
        & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
      )>>, attributes?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'ProductVariantAttribute' }
        & Pick<Types.ProductVariantAttribute, 'attribute' | 'value'>
      )>>>, images?: Types.Maybe<Array<(
        { __typename?: 'Image' }
        & Pick<Types.Image, 'url' | 'altText' | 'key'>
        & { variants?: Types.Maybe<Array<(
          { __typename?: 'ImageVariant' }
          & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
        )>> }
      )>> }
    )>>, vatType?: Types.Maybe<(
      { __typename?: 'VatInfo' }
      & Pick<Types.VatInfo, 'name' | 'percent'>
    )>, summary?: Types.Maybe<(
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
    )>, body?: Types.Maybe<(
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
    )>, table?: Types.Maybe<(
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
    )>, related?: Types.Maybe<(
      { __typename?: 'Component' }
      & { content?: Types.Maybe<{ __typename: 'BooleanContent' } | { __typename: 'ComponentChoiceContent' } | { __typename: 'ContentChunkContent' } | { __typename: 'DatetimeContent' } | { __typename: 'FileContent' } | { __typename: 'GridRelationsContent' } | { __typename: 'ImageContent' } | (
        { __typename: 'ItemRelationsContent' }
        & { items?: Types.Maybe<Array<(
          { __typename?: 'Document' }
          & Pick<Types.Document, 'path' | 'name'>
          & { topics?: Types.Maybe<Array<(
            { __typename?: 'Topic' }
            & Pick<Types.Topic, 'name'>
          )>> }
        ) | (
          { __typename?: 'Folder' }
          & Pick<Types.Folder, 'path' | 'name'>
          & { topics?: Types.Maybe<Array<(
            { __typename?: 'Topic' }
            & Pick<Types.Topic, 'name'>
          )>> }
        ) | (
          { __typename: 'Product' }
          & Pick<Types.Product, 'path' | 'name'>
          & { defaultVariant?: Types.Maybe<(
            { __typename?: 'ProductVariant' }
            & Pick<Types.ProductVariant, 'price'>
            & { firstImage?: Types.Maybe<(
              { __typename?: 'Image' }
              & Pick<Types.Image, 'url' | 'altText'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
              )>> }
            )> }
          )>, topics?: Types.Maybe<Array<(
            { __typename?: 'Topic' }
            & Pick<Types.Topic, 'name'>
          )>> }
        )>> }
      ) | { __typename: 'LocationContent' } | { __typename: 'NumericContent' } | { __typename: 'ParagraphCollectionContent' } | { __typename: 'PropertiesTableContent' } | { __typename: 'RichTextContent' } | { __typename: 'SelectionContent' } | { __typename: 'SingleLineContent' } | { __typename: 'VideoContent' }> }
    )> }
  )> }
);


export const ProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Product"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"VersionLabel"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"product"},"name":{"kind":"Name","value":"catalogue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"StringValue","value":"en","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"summary"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"brief","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"body"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"body","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"table"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"nutrition","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stock"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vatType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"related"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"related","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemRelationsContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"topics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},...ComponentFragmentDoc.definitions]} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>;