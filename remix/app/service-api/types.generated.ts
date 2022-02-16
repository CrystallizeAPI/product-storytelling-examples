export type Maybe<T> = T | null;
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
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type AddressInput = {
  type?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  street2?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type Attribute = {
  __typename?: 'Attribute';
  attribute: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type Basket = {
  __typename?: 'Basket';
  cart: Array<CartItem>;
  total: Price;
  voucher?: Maybe<Voucher>;
};

export type BasketModelInput = {
  locale: LocaleInput;
  cart: Array<SimpleCartItem>;
  voucherCode?: Maybe<Scalars['String']>;
  crystallizeOrderId?: Maybe<Scalars['String']>;
  klarnaOrderId?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CartItem = {
  __typename?: 'CartItem';
  sku: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  vatType?: Maybe<VatType>;
  stock?: Maybe<Scalars['Int']>;
  price?: Maybe<Price>;
  priceVariants?: Maybe<Array<PriceVariant>>;
  attributes?: Maybe<Array<Attribute>>;
  images?: Maybe<Array<Image>>;
};

export type CheckoutModelInput = {
  basketModel: BasketModelInput;
  customer?: Maybe<OrderCustomerInput>;
  confirmationURL: Scalars['String'];
  checkoutURL: Scalars['String'];
  termsURL: Scalars['String'];
};

export type CreateInvoiceMutation = {
  __typename?: 'CreateInvoiceMutation';
  success: Scalars['Boolean'];
  orderId?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  url: Scalars['String'];
  variants?: Maybe<Array<ImageVariant>>;
};

export type ImageVariant = {
  __typename?: 'ImageVariant';
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type InvoiceMutation = {
  __typename?: 'InvoiceMutation';
  createInvoice: CreateInvoiceMutation;
};


export type InvoiceMutationCreateInvoiceArgs = {
  checkoutModel: CheckoutModelInput;
};


export type KeyValuePair = {
  __typename?: 'KeyValuePair';
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type KeyValuePairInput = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type KlarnaMutations = {
  __typename?: 'KlarnaMutations';
  renderCheckout: KlarnaRenderCheckoutReponse;
};


export type KlarnaMutationsRenderCheckoutArgs = {
  checkoutModel: CheckoutModelInput;
};

export type KlarnaRenderCheckoutReponse = {
  __typename?: 'KlarnaRenderCheckoutReponse';
  html: Scalars['String'];
  klarnaOrderId: Scalars['String'];
  crystallizeOrderId: Scalars['String'];
};

export type LocaleInput = {
  locale: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  appLanguage: Scalars['String'];
  crystallizeCatalogueLanguage?: Maybe<Scalars['String']>;
  crystallizePriceVariant?: Maybe<Scalars['String']>;
};

export type MollieCreatePaymentResponse = {
  __typename?: 'MollieCreatePaymentResponse';
  success: Scalars['Boolean'];
  checkoutLink?: Maybe<Scalars['String']>;
  crystallizeOrderId: Scalars['String'];
};

export type MollieMutations = {
  __typename?: 'MollieMutations';
  createPayment: MollieCreatePaymentResponse;
};


export type MollieMutationsCreatePaymentArgs = {
  checkoutModel: CheckoutModelInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  user?: Maybe<UserMutations>;
  paymentProviders: PaymentProvidersMutations;
};

export type MyCustomBusinnessQueries = {
  __typename?: 'MyCustomBusinnessQueries';
  whatIsThis: Scalars['String'];
  dynamicRandomInt: Scalars['Int'];
};

export type OrderCustomerInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<AddressInput>>;
};

export type OrderQueries = {
  __typename?: 'OrderQueries';
  get?: Maybe<Scalars['JSON']>;
};


export type OrderQueriesGetArgs = {
  id: Scalars['String'];
};

export type PaymentProvider = {
  __typename?: 'PaymentProvider';
  enabled: Scalars['Boolean'];
  config?: Maybe<Scalars['JSON']>;
};

export type PaymentProvidersMutations = {
  __typename?: 'PaymentProvidersMutations';
  stripe: StripeMutations;
  klarna: KlarnaMutations;
  mollie: MollieMutations;
  vipps: VippsMutations;
  paypal: PaypalMutation;
  invoice: InvoiceMutation;
};

export type PaymentProvidersQueries = {
  __typename?: 'PaymentProvidersQueries';
  stripe: PaymentProvider;
  klarna: PaymentProvider;
  vipps: PaymentProvider;
  mollie: PaymentProvider;
  paypal: PaymentProvider;
  invoice: PaymentProvider;
};

export type PaypalMutation = {
  __typename?: 'PaypalMutation';
  createPayment: PaypalPaymentResponse;
  confirmPayment: PaypalPaymentResponse;
};


export type PaypalMutationCreatePaymentArgs = {
  checkoutModel: CheckoutModelInput;
};


export type PaypalMutationConfirmPaymentArgs = {
  checkoutModel: CheckoutModelInput;
  orderId?: Maybe<Scalars['String']>;
};

export type PaypalPaymentResponse = {
  __typename?: 'PaypalPaymentResponse';
  success: Scalars['Boolean'];
  orderId?: Maybe<Scalars['String']>;
};

export type Price = {
  __typename?: 'Price';
  gross: Scalars['Float'];
  net: Scalars['Float'];
  currency?: Maybe<Scalars['String']>;
  tax?: Maybe<Tax>;
  taxAmount?: Maybe<Scalars['Float']>;
  discount: Scalars['Float'];
};

export type PriceVariant = {
  __typename?: 'PriceVariant';
  price?: Maybe<Scalars['Float']>;
  identifier: Scalars['String'];
  currency: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  myCustomBusinessThing: MyCustomBusinnessQueries;
  basket: Basket;
  user: User;
  paymentProviders: PaymentProvidersQueries;
  orders: OrderQueries;
  voucher: VoucherResponse;
};


export type QueryBasketArgs = {
  basketModel: BasketModelInput;
};


export type QueryVoucherArgs = {
  code: Scalars['String'];
};

export type SendMagicLinkResponse = {
  __typename?: 'SendMagicLinkResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type SimpleCartItem = {
  id?: Maybe<Scalars['String']>;
  sku: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  priceVariantIdentifier: Scalars['String'];
  stock?: Maybe<Scalars['Int']>;
};

export type StripeConfirmOrderResponse = {
  __typename?: 'StripeConfirmOrderResponse';
  success: Scalars['Boolean'];
  orderId?: Maybe<Scalars['String']>;
};

export type StripeMutations = {
  __typename?: 'StripeMutations';
  createPaymentIntent?: Maybe<Scalars['JSON']>;
  confirmOrder: StripeConfirmOrderResponse;
};


export type StripeMutationsCreatePaymentIntentArgs = {
  checkoutModel: CheckoutModelInput;
  confirm?: Maybe<Scalars['Boolean']>;
  paymentMethodId?: Maybe<Scalars['String']>;
};


export type StripeMutationsConfirmOrderArgs = {
  checkoutModel: CheckoutModelInput;
  paymentIntentId: Scalars['String'];
};

export type Tax = {
  __typename?: 'Tax';
  name?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Float']>;
};


export type User = {
  __typename?: 'User';
  logoutLink: Scalars['String'];
  isLoggedIn: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  meta?: Maybe<Array<KeyValuePair>>;
};

export type UserMutations = {
  __typename?: 'UserMutations';
  sendMagicLink: SendMagicLinkResponse;
  update: User;
};


export type UserMutationsSendMagicLinkArgs = {
  email: Scalars['String'];
  redirectURLAfterLogin: Scalars['String'];
};


export type UserMutationsUpdateArgs = {
  input: UserUpdateInput;
};

export type UserUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  meta?: Maybe<Array<KeyValuePairInput>>;
};

export type VatType = {
  __typename?: 'VatType';
  name: Scalars['String'];
  percent: Scalars['Int'];
};

export type VippsInitiatePaymentResponse = {
  __typename?: 'VippsInitiatePaymentResponse';
  success: Scalars['Boolean'];
  checkoutLink?: Maybe<Scalars['String']>;
  crystallizeOrderId: Scalars['String'];
};

export type VippsMutations = {
  __typename?: 'VippsMutations';
  initiatePayment: VippsInitiatePaymentResponse;
};


export type VippsMutationsInitiatePaymentArgs = {
  checkoutModel: CheckoutModelInput;
};

export type Voucher = {
  __typename?: 'Voucher';
  code: Scalars['String'];
  discountAmount?: Maybe<Scalars['Int']>;
  discountPercent?: Maybe<Scalars['Float']>;
};

export type VoucherResponse = {
  __typename?: 'VoucherResponse';
  voucher?: Maybe<Voucher>;
  isValid: Scalars['Boolean'];
};
