import * as Types from '../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ComponentFragmentDoc, BooleanFragmentDoc, ImageFragmentDoc } from '../fragments/content.generated';
export type FrontpageQueryVariables = Types.Exact<{
  path: Types.Scalars['String'];
  version?: Types.InputMaybe<Types.VersionLabel>;
}>;


export type FrontpageQuery = (
  { __typename?: 'Query' }
  & { catalogue?: Types.Maybe<(
    { __typename?: 'Document' }
    & { meta?: Types.Maybe<(
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
    )>, grid?: Types.Maybe<(
      { __typename?: 'Component' }
      & { content?: Types.Maybe<{ __typename?: 'BooleanContent' } | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | (
        { __typename?: 'GridRelationsContent' }
        & { grids?: Types.Maybe<Array<(
          { __typename?: 'Grid' }
          & { rows: Array<(
            { __typename?: 'GridRow' }
            & { columns: Array<(
              { __typename?: 'GridColumn' }
              & { layout?: Types.Maybe<(
                { __typename?: 'GridColumnLayout' }
                & Pick<Types.GridColumnLayout, 'rowspan' | 'colspan'>
              )>, item?: Types.Maybe<(
                { __typename?: 'Document' }
                & Pick<Types.Document, 'name' | 'path'>
                & { topics?: Types.Maybe<Array<(
                  { __typename?: 'Topic' }
                  & Pick<Types.Topic, 'name'>
                )>> }
              ) | (
                { __typename?: 'Folder' }
                & Pick<Types.Folder, 'name' | 'path'>
                & { topics?: Types.Maybe<Array<(
                  { __typename?: 'Topic' }
                  & Pick<Types.Topic, 'name'>
                )>> }
              ) | (
                { __typename?: 'Product' }
                & Pick<Types.Product, 'name' | 'path'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ProductVariant' }
                  & Pick<Types.ProductVariant, 'price'>
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
                    )>> }
                  )>> }
                )>>, topics?: Types.Maybe<Array<(
                  { __typename?: 'Topic' }
                  & Pick<Types.Topic, 'name'>
                )>> }
              )> }
            )> }
          )> }
        )>> }
      ) | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
    )> }
  ) | (
    { __typename?: 'Folder' }
    & { meta?: Types.Maybe<(
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
    )>, grid?: Types.Maybe<(
      { __typename?: 'Component' }
      & { content?: Types.Maybe<{ __typename?: 'BooleanContent' } | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | (
        { __typename?: 'GridRelationsContent' }
        & { grids?: Types.Maybe<Array<(
          { __typename?: 'Grid' }
          & { rows: Array<(
            { __typename?: 'GridRow' }
            & { columns: Array<(
              { __typename?: 'GridColumn' }
              & { layout?: Types.Maybe<(
                { __typename?: 'GridColumnLayout' }
                & Pick<Types.GridColumnLayout, 'rowspan' | 'colspan'>
              )>, item?: Types.Maybe<(
                { __typename?: 'Document' }
                & Pick<Types.Document, 'name' | 'path'>
                & { topics?: Types.Maybe<Array<(
                  { __typename?: 'Topic' }
                  & Pick<Types.Topic, 'name'>
                )>> }
              ) | (
                { __typename?: 'Folder' }
                & Pick<Types.Folder, 'name' | 'path'>
                & { topics?: Types.Maybe<Array<(
                  { __typename?: 'Topic' }
                  & Pick<Types.Topic, 'name'>
                )>> }
              ) | (
                { __typename?: 'Product' }
                & Pick<Types.Product, 'name' | 'path'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ProductVariant' }
                  & Pick<Types.ProductVariant, 'price'>
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
                    )>> }
                  )>> }
                )>>, topics?: Types.Maybe<Array<(
                  { __typename?: 'Topic' }
                  & Pick<Types.Topic, 'name'>
                )>> }
              )> }
            )> }
          )> }
        )>> }
      ) | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
    )> }
  ) | (
    { __typename?: 'Product' }
    & { meta?: Types.Maybe<(
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
    )>, grid?: Types.Maybe<(
      { __typename?: 'Component' }
      & { content?: Types.Maybe<{ __typename?: 'BooleanContent' } | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | (
        { __typename?: 'GridRelationsContent' }
        & { grids?: Types.Maybe<Array<(
          { __typename?: 'Grid' }
          & { rows: Array<(
            { __typename?: 'GridRow' }
            & { columns: Array<(
              { __typename?: 'GridColumn' }
              & { layout?: Types.Maybe<(
                { __typename?: 'GridColumnLayout' }
                & Pick<Types.GridColumnLayout, 'rowspan' | 'colspan'>
              )>, item?: Types.Maybe<(
                { __typename?: 'Document' }
                & Pick<Types.Document, 'name' | 'path'>
                & { topics?: Types.Maybe<Array<(
                  { __typename?: 'Topic' }
                  & Pick<Types.Topic, 'name'>
                )>> }
              ) | (
                { __typename?: 'Folder' }
                & Pick<Types.Folder, 'name' | 'path'>
                & { topics?: Types.Maybe<Array<(
                  { __typename?: 'Topic' }
                  & Pick<Types.Topic, 'name'>
                )>> }
              ) | (
                { __typename?: 'Product' }
                & Pick<Types.Product, 'name' | 'path'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ProductVariant' }
                  & Pick<Types.ProductVariant, 'price'>
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
                    )>> }
                  )>> }
                )>>, topics?: Types.Maybe<Array<(
                  { __typename?: 'Topic' }
                  & Pick<Types.Topic, 'name'>
                )>> }
              )> }
            )> }
          )> }
        )>> }
      ) | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
    )> }
  )>, donuts?: Types.Maybe<(
    { __typename?: 'Document' }
    & { children?: Types.Maybe<Array<(
      { __typename?: 'Document' }
      & Pick<Types.Document, 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    ) | (
      { __typename?: 'Folder' }
      & Pick<Types.Folder, 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    ) | (
      { __typename: 'Product' }
      & Pick<Types.Product, 'name' | 'path' | 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, defaultVariant?: Types.Maybe<(
        { __typename?: 'ProductVariant' }
        & Pick<Types.ProductVariant, 'price'>
        & { firstImage?: Types.Maybe<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
          )>> }
        )> }
      )>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    )>> }
  ) | (
    { __typename?: 'Folder' }
    & { children?: Types.Maybe<Array<(
      { __typename?: 'Document' }
      & Pick<Types.Document, 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    ) | (
      { __typename?: 'Folder' }
      & Pick<Types.Folder, 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    ) | (
      { __typename: 'Product' }
      & Pick<Types.Product, 'name' | 'path' | 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, defaultVariant?: Types.Maybe<(
        { __typename?: 'ProductVariant' }
        & Pick<Types.ProductVariant, 'price'>
        & { firstImage?: Types.Maybe<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
          )>> }
        )> }
      )>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    )>> }
  ) | (
    { __typename?: 'Product' }
    & { children?: Types.Maybe<Array<(
      { __typename?: 'Document' }
      & Pick<Types.Document, 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    ) | (
      { __typename?: 'Folder' }
      & Pick<Types.Folder, 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    ) | (
      { __typename: 'Product' }
      & Pick<Types.Product, 'name' | 'path' | 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, defaultVariant?: Types.Maybe<(
        { __typename?: 'ProductVariant' }
        & Pick<Types.ProductVariant, 'price'>
        & { firstImage?: Types.Maybe<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
          )>> }
        )> }
      )>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    )>> }
  )> }
);


export const FrontpageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Frontpage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"VersionLabel"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"catalogue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"StringValue","value":"en","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"meta"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"meta","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"grid"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"grid","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GridRelationsContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grids"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rowspan"}},{"kind":"Field","name":{"kind":"Name","value":"colspan"}}]}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"topics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"donuts"},"name":{"kind":"Name","value":"catalogue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/shop","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"StringValue","value":"en","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"topics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"bundle"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"bundle","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"boolean"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"topics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]}}]}},...ComponentFragmentDoc.definitions,...ImageFragmentDoc.definitions,...BooleanFragmentDoc.definitions]} as unknown as DocumentNode<FrontpageQuery, FrontpageQueryVariables>;