export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Datetime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanContent = {
  __typename?: 'BooleanContent';
  value?: Maybe<Scalars['Boolean']>;
};

export type Component = {
  __typename?: 'Component';
  content?: Maybe<ComponentContent>;
  id: Scalars['String'];
  /** @deprecated meta properties on components are no longer supported and will be removed in a future release */
  meta?: Maybe<Array<MetaProperty>>;
  /** @deprecated meta properties on components are no longer supported and will be removed in a future release */
  metaProperty?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: ComponentType;
};


export type ComponentMetaPropertyArgs = {
  key: Scalars['String'];
};

export type ComponentChoiceContent = {
  __typename?: 'ComponentChoiceContent';
  selectedComponent: Component;
};

export type ComponentContent = BooleanContent | ComponentChoiceContent | ContentChunkContent | DatetimeContent | FileContent | GridRelationsContent | ImageContent | ItemRelationsContent | LocationContent | NumericContent | ParagraphCollectionContent | PropertiesTableContent | RichTextContent | SelectionContent | SingleLineContent | VideoContent;

export enum ComponentType {
  Boolean = 'boolean',
  ComponentChoice = 'componentChoice',
  ContentChunk = 'contentChunk',
  Datetime = 'datetime',
  Files = 'files',
  GridRelations = 'gridRelations',
  Images = 'images',
  ItemRelations = 'itemRelations',
  Location = 'location',
  Numeric = 'numeric',
  ParagraphCollection = 'paragraphCollection',
  PropertiesTable = 'propertiesTable',
  RichText = 'richText',
  Selection = 'selection',
  SingleLine = 'singleLine',
  Videos = 'videos'
}

export type ContentChunkContent = {
  __typename?: 'ContentChunkContent';
  chunks: Array<Array<Component>>;
};


export type ContentChunkContentChunksArgs = {
  componentIds?: InputMaybe<Array<Scalars['String']>>;
};

export type DatetimeContent = {
  __typename?: 'DatetimeContent';
  datetime?: Maybe<Scalars['Datetime']>;
};

export type Document = Item & {
  __typename?: 'Document';
  children?: Maybe<Array<Item>>;
  component?: Maybe<Component>;
  components?: Maybe<Array<Component>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  externalReference?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Item>;
  path?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Datetime']>;
  relatingItems?: Maybe<Array<Item>>;
  shape: Shape;
  subtree: SubtreeConnection;
  topics?: Maybe<Array<Topic>>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  version: ItemVersion;
};


export type DocumentComponentArgs = {
  id: Scalars['String'];
};


export type DocumentComponentsArgs = {
  ids?: InputMaybe<Array<Scalars['String']>>;
};


export type DocumentSubtreeArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortDirection>;
  sortField?: InputMaybe<ItemSortField>;
};

export type File = {
  __typename?: 'File';
  createdAt?: Maybe<Scalars['Datetime']>;
  key: Scalars['String'];
  meta?: Maybe<Array<MetaProperty>>;
  metaProperty?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};


export type FileMetaPropertyArgs = {
  key: Scalars['String'];
};

export type FileContent = {
  __typename?: 'FileContent';
  files?: Maybe<Array<File>>;
  firstFile?: Maybe<File>;
};

export type Folder = Item & {
  __typename?: 'Folder';
  children?: Maybe<Array<Item>>;
  component?: Maybe<Component>;
  components?: Maybe<Array<Component>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  externalReference?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Item>;
  path?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Datetime']>;
  relatingItems?: Maybe<Array<Item>>;
  shape: Shape;
  subtree: SubtreeConnection;
  topics?: Maybe<Array<Topic>>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  version: ItemVersion;
};


export type FolderComponentArgs = {
  id: Scalars['String'];
};


export type FolderComponentsArgs = {
  ids?: InputMaybe<Array<Scalars['String']>>;
};


export type FolderSubtreeArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortDirection>;
  sortField?: InputMaybe<ItemSortField>;
};

export type Grid = {
  __typename?: 'Grid';
  createdAt?: Maybe<Scalars['Datetime']>;
  id: Scalars['ID'];
  language: Scalars['String'];
  meta?: Maybe<Array<MetaProperty>>;
  metaProperty?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rows: Array<GridRow>;
};


export type GridMetaPropertyArgs = {
  key: Scalars['String'];
};

export type GridColumn = {
  __typename?: 'GridColumn';
  item?: Maybe<Item>;
  itemId?: Maybe<Scalars['ID']>;
  itemType?: Maybe<Scalars['String']>;
  layout?: Maybe<GridColumnLayout>;
  meta?: Maybe<Array<MetaProperty>>;
  metaProperty?: Maybe<Scalars['String']>;
};


export type GridColumnMetaPropertyArgs = {
  key: Scalars['String'];
};

export type GridColumnLayout = {
  __typename?: 'GridColumnLayout';
  colspan?: Maybe<Scalars['Int']>;
  rowspan?: Maybe<Scalars['Int']>;
};

export type GridRelationsContent = {
  __typename?: 'GridRelationsContent';
  grids?: Maybe<Array<Grid>>;
};

export type GridRow = {
  __typename?: 'GridRow';
  columns: Array<GridColumn>;
  meta?: Maybe<Array<MetaProperty>>;
  metaProperty?: Maybe<Scalars['String']>;
};


export type GridRowMetaPropertyArgs = {
  key: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  altText?: Maybe<Scalars['String']>;
  caption?: Maybe<RichTextContent>;
  createdAt?: Maybe<Scalars['Datetime']>;
  key: Scalars['String'];
  meta?: Maybe<Array<MetaProperty>>;
  metaProperty?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  variants?: Maybe<Array<ImageVariant>>;
};


export type ImageMetaPropertyArgs = {
  key: Scalars['String'];
};

export type ImageContent = {
  __typename?: 'ImageContent';
  firstImage?: Maybe<Image>;
  images?: Maybe<Array<Image>>;
};

export type ImageVariant = {
  __typename?: 'ImageVariant';
  height?: Maybe<Scalars['Int']>;
  key: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type Item = {
  children?: Maybe<Array<Item>>;
  component?: Maybe<Component>;
  components?: Maybe<Array<Component>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  externalReference?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Item>;
  path?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Datetime']>;
  relatingItems?: Maybe<Array<Item>>;
  shape: Shape;
  subtree: SubtreeConnection;
  topics?: Maybe<Array<Topic>>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  version: ItemVersion;
};


export type ItemComponentArgs = {
  id: Scalars['String'];
};


export type ItemComponentsArgs = {
  ids?: InputMaybe<Array<Scalars['String']>>;
};


export type ItemSubtreeArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortDirection>;
  sortField?: InputMaybe<ItemSortField>;
};

export type ItemRelationsContent = {
  __typename?: 'ItemRelationsContent';
  items?: Maybe<Array<Item>>;
};

export enum ItemSortField {
  TreePosition = 'treePosition'
}

export type ItemVersion = {
  __typename?: 'ItemVersion';
  createdAt?: Maybe<Scalars['Datetime']>;
  id: Scalars['ID'];
  label: VersionLabel;
};

export type KeyValuePair = {
  __typename?: 'KeyValuePair';
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type LocationContent = {
  __typename?: 'LocationContent';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

export type MetaProperty = {
  __typename?: 'MetaProperty';
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type NumericContent = {
  __typename?: 'NumericContent';
  number: Scalars['Float'];
  unit?: Maybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  totalNodes: Scalars['Int'];
};

export type ParagraphCollectionContent = {
  __typename?: 'ParagraphCollectionContent';
  paragraphs?: Maybe<Array<ParagraphContent>>;
};

export type ParagraphContent = {
  __typename?: 'ParagraphContent';
  body?: Maybe<RichTextContent>;
  images?: Maybe<Array<Image>>;
  title?: Maybe<SingleLineContent>;
  videos?: Maybe<Array<Video>>;
};

export type Product = Item & {
  __typename?: 'Product';
  children?: Maybe<Array<Item>>;
  component?: Maybe<Component>;
  components?: Maybe<Array<Component>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  defaultVariant?: Maybe<ProductVariant>;
  externalReference?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isSubscriptionOnly?: Maybe<Scalars['Boolean']>;
  isVirtual?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Item>;
  path?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Datetime']>;
  relatingItems?: Maybe<Array<Item>>;
  shape: Shape;
  subtree: SubtreeConnection;
  topics?: Maybe<Array<Topic>>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  variants?: Maybe<Array<ProductVariant>>;
  vatType?: Maybe<VatInfo>;
  version: ItemVersion;
};


export type ProductComponentArgs = {
  id: Scalars['String'];
};


export type ProductComponentsArgs = {
  ids?: InputMaybe<Array<Scalars['String']>>;
};


export type ProductSubtreeArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortDirection>;
  sortField?: InputMaybe<ItemSortField>;
};

export type ProductPriceVariant = {
  __typename?: 'ProductPriceVariant';
  currency?: Maybe<Scalars['String']>;
  identifier: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductStockLocation = {
  __typename?: 'ProductStockLocation';
  identifier: Scalars['String'];
  meta?: Maybe<Array<KeyValuePair>>;
  name: Scalars['String'];
  stock?: Maybe<Scalars['Int']>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  attributes?: Maybe<Array<Maybe<ProductVariantAttribute>>>;
  externalReference?: Maybe<Scalars['String']>;
  firstImage?: Maybe<Image>;
  id: Scalars['ID'];
  /** @deprecated The `image` property is deprecated and will be removed in a future release. Use the `images` property instead. */
  image?: Maybe<Image>;
  images?: Maybe<Array<Image>>;
  isDefault?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceVariants?: Maybe<Array<ProductPriceVariant>>;
  sku: Scalars['String'];
  stock?: Maybe<Scalars['Int']>;
  stockLocations?: Maybe<Array<ProductStockLocation>>;
  subscriptionPlans?: Maybe<Array<ProductVariantSubscriptionPlan>>;
};


export type ProductVariantPriceArgs = {
  identifier?: InputMaybe<Scalars['String']>;
};


export type ProductVariantStockArgs = {
  identifier?: InputMaybe<Scalars['String']>;
};

export type ProductVariantAttribute = {
  __typename?: 'ProductVariantAttribute';
  attribute: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type ProductVariantSubscriptionMeteredVariable = {
  __typename?: 'ProductVariantSubscriptionMeteredVariable';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  name: Scalars['String'];
  tierType: TierType;
  tiers: Array<ProductVariantSubscriptionPlanTier>;
};

export type ProductVariantSubscriptionPlan = {
  __typename?: 'ProductVariantSubscriptionPlan';
  identifier: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  periods: Array<ProductVariantSubscriptionPlanPeriod>;
};

export type ProductVariantSubscriptionPlanPeriod = {
  __typename?: 'ProductVariantSubscriptionPlanPeriod';
  id: Scalars['ID'];
  initial?: Maybe<ProductVariantSubscriptionPlanPricing>;
  name: Scalars['String'];
  recurring?: Maybe<ProductVariantSubscriptionPlanPricing>;
};

export type ProductVariantSubscriptionPlanPricing = {
  __typename?: 'ProductVariantSubscriptionPlanPricing';
  meteredVariables?: Maybe<Array<ProductVariantSubscriptionMeteredVariable>>;
  period: Scalars['Int'];
  price?: Maybe<Scalars['Float']>;
  priceVariants?: Maybe<Array<ProductPriceVariant>>;
  unit: SubscriptionPeriodUnit;
};


export type ProductVariantSubscriptionPlanPricingPriceArgs = {
  identifier?: InputMaybe<Scalars['String']>;
};

export type ProductVariantSubscriptionPlanTier = {
  __typename?: 'ProductVariantSubscriptionPlanTier';
  price?: Maybe<Scalars['Float']>;
  priceVariants?: Maybe<Array<ProductPriceVariant>>;
  threshold: Scalars['Int'];
};


export type ProductVariantSubscriptionPlanTierPriceArgs = {
  identifier?: InputMaybe<Scalars['String']>;
};

export type PropertiesTableContent = {
  __typename?: 'PropertiesTableContent';
  sections?: Maybe<Array<PropertiesTableSection>>;
};

export type PropertiesTableSection = {
  __typename?: 'PropertiesTableSection';
  properties?: Maybe<Array<PropertiesTableValue>>;
  title?: Maybe<Scalars['String']>;
};

export type PropertiesTableValue = {
  __typename?: 'PropertiesTableValue';
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  catalogue?: Maybe<Item>;
  grid?: Maybe<Grid>;
  tenant?: Maybe<Tenant>;
  topic?: Maybe<Topic>;
  topics: Array<Topic>;
  /** @deprecated `tree` query is deprecated and will be removed in a future release. Use the `catalogue` query instead. */
  tree?: Maybe<Array<Maybe<Item>>>;
  version?: Maybe<VersionInfo>;
};


export type QueryCatalogueArgs = {
  language?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<VersionLabel>;
};


export type QueryGridArgs = {
  id: Scalars['ID'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryTenantArgs = {
  language?: InputMaybe<Scalars['String']>;
};


export type QueryTopicArgs = {
  language: Scalars['String'];
  path: Scalars['String'];
};


export type QueryTopicsArgs = {
  ancestry?: InputMaybe<Array<Scalars['String']>>;
  language?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryTreeArgs = {
  language?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};

export type RichTextContent = {
  __typename?: 'RichTextContent';
  html?: Maybe<Array<Scalars['String']>>;
  json?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  plainText?: Maybe<Array<Scalars['String']>>;
};

export type SelectionComponentOption = {
  __typename?: 'SelectionComponentOption';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type SelectionContent = {
  __typename?: 'SelectionContent';
  options?: Maybe<Array<SelectionComponentOption>>;
};

export type Shape = {
  __typename?: 'Shape';
  createdAt?: Maybe<Scalars['Datetime']>;
  /** @deprecated Shape ids have been deprecated in favor of human readable identifiers and will be removed in a future release. */
  id: Scalars['ID'];
  identifier: Scalars['String'];
  meta?: Maybe<Array<MetaProperty>>;
  metaProperty?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type ShapeMetaPropertyArgs = {
  key: Scalars['String'];
};

export type SingleLineContent = {
  __typename?: 'SingleLineContent';
  text?: Maybe<Scalars['String']>;
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum SubscriptionPeriodUnit {
  Day = 'day',
  Month = 'month',
  Week = 'week',
  Year = 'year'
}

export type SubtreeConnection = {
  __typename?: 'SubtreeConnection';
  edges?: Maybe<Array<SubtreeEdge>>;
  pageInfo: PageInfo;
};

export type SubtreeEdge = {
  __typename?: 'SubtreeEdge';
  cursor: Scalars['String'];
  node: Item;
};

export type Tenant = {
  __typename?: 'Tenant';
  createdAt?: Maybe<Scalars['Datetime']>;
  defaults?: Maybe<TenantDefaults>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  isTrial?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  logo?: Maybe<Image>;
  name?: Maybe<Scalars['String']>;
};

export type TenantDefaults = {
  __typename?: 'TenantDefaults';
  currency?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export enum TierType {
  Graduated = 'graduated',
  Volume = 'volume'
}

export type Topic = {
  __typename?: 'Topic';
  children?: Maybe<Array<Topic>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  id: Scalars['ID'];
  items: TopicItemConnection;
  language?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: Maybe<Topic>;
  parentId?: Maybe<Scalars['ID']>;
  path: Scalars['String'];
};


export type TopicItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortDirection>;
  sortField?: InputMaybe<TopicItemSortField>;
};

export type TopicItemConnection = {
  __typename?: 'TopicItemConnection';
  edges?: Maybe<Array<TopicItemEdge>>;
  pageInfo: PageInfo;
};

export type TopicItemEdge = {
  __typename?: 'TopicItemEdge';
  cursor: Scalars['String'];
  node: Item;
};

export enum TopicItemSortField {
  CreatedAt = 'createdAt'
}

export type VatInfo = {
  __typename?: 'VatInfo';
  name?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Float']>;
};

export type VersionInfo = {
  __typename?: 'VersionInfo';
  apiVersion: Scalars['String'];
  commitSha: Scalars['String'];
};

export enum VersionLabel {
  Draft = 'draft',
  Published = 'published'
}

export type Video = {
  __typename?: 'Video';
  id: Scalars['String'];
  playlist?: Maybe<Scalars['String']>;
  playlists?: Maybe<Array<Scalars['String']>>;
  thumbnails?: Maybe<Array<Image>>;
  title?: Maybe<Scalars['String']>;
};


export type VideoPlaylistArgs = {
  type: Scalars['String'];
};

export type VideoContent = {
  __typename?: 'VideoContent';
  firstVideo?: Maybe<Video>;
  videos?: Maybe<Array<Video>>;
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};
