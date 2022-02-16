const gql = require("graphql-tag");

module.exports = gql`
  scalar JSON

  type Query {
    myCustomBusinessThing: MyCustomBusinnessQueries!
    basket(basketModel: BasketModelInput!): Basket!
    user: User!
    paymentProviders: PaymentProvidersQueries!
    orders: OrderQueries!
    voucher(code: String!): VoucherResponse!
  }

  type VoucherResponse {
    voucher: Voucher
    isValid: Boolean!
  }

  type MyCustomBusinnessQueries {
    whatIsThis: String!
    dynamicRandomInt: Int!
  }

  type Basket {
    cart: [CartItem!]!
    total: Price!
    voucher: Voucher
  }

  type CartItem {
    sku: String!
    name: String
    path: String
    quantity: Int!
    vatType: VatType
    stock: Int
    price: Price
    priceVariants: [PriceVariant!]
    attributes: [Attribute!]
    images: [Image!]
  }

  type PriceVariant {
    price: Float
    identifier: String!
    currency: String!
  }

  type Attribute {
    attribute: String!
    value: String
  }

  type Image {
    url: String!
    variants: [ImageVariant!]
  }

  type ImageVariant {
    url: String!
    width: Int
    height: Int
    size: Int
  }

  type Price {
    gross: Float!
    net: Float!
    currency: String
    tax: Tax
    taxAmount: Float
    discount: Float!
  }

  type Tax {
    name: String
    percent: Float
  }

  type VatType {
    name: String!
    percent: Int!
  }

  type User {
    logoutLink: String!
    isLoggedIn: Boolean!
    email: String
    firstName: String
    middleName: String
    lastName: String
    meta: [KeyValuePair!]
  }

  type PaymentProvidersQueries {
    stripe: PaymentProvider!
    klarna: PaymentProvider!
    vipps: PaymentProvider!
    mollie: PaymentProvider!
    paypal: PaymentProvider!
    invoice: PaymentProvider!
  }

  type PaymentProvider {
    enabled: Boolean!
    config: JSON
  }

  type OrderQueries {
    get(id: String!): JSON
  }

  type Voucher {
    code: String!
    discountAmount: Int
    discountPercent: Float
  }

  type Mutation {
    user: UserMutations
    paymentProviders: PaymentProvidersMutations!
  }

  input BasketModelInput {
    locale: LocaleInput!
    cart: [SimpleCartItem!]!
    voucherCode: String
    crystallizeOrderId: String
    klarnaOrderId: String
  }

  input LocaleInput {
    locale: String!
    displayName: String
    appLanguage: String!
    crystallizeCatalogueLanguage: String
    crystallizePriceVariant: String
  }

  input SimpleCartItem {
    id: String
    sku: String!
    path: String
    quantity: Int
    priceVariantIdentifier: String!
    stock: Int
  }

  type UserMutations {
    sendMagicLink(
      email: String!
      redirectURLAfterLogin: String!
    ): SendMagicLinkResponse!
    update(input: UserUpdateInput!): User!
  }

  input UserUpdateInput {
    firstName: String
    middleName: String
    lastName: String
    meta: [KeyValuePairInput!]
  }

  type SendMagicLinkResponse {
    success: Boolean!
    error: String
  }

  input CheckoutModelInput {
    basketModel: BasketModelInput!
    customer: OrderCustomerInput
    confirmationURL: String!
    checkoutURL: String!
    termsURL: String!
  }

  input OrderCustomerInput {
    firstName: String
    lastName: String
    addresses: [AddressInput!]
  }

  input AddressInput {
    type: String
    email: String
    firstName: String
    middleName: String
    lastName: String
    street: String
    street2: String
    streetNumber: String
    postalCode: String
    city: String
    state: String
    country: String
    phone: String
  }

  type PaymentProvidersMutations {
    stripe: StripeMutations!
    klarna: KlarnaMutations!
    mollie: MollieMutations!
    vipps: VippsMutations!
    paypal: PaypalMutation!
    invoice: InvoiceMutation!
  }

  type StripeMutations {
    createPaymentIntent(
      checkoutModel: CheckoutModelInput!
      confirm: Boolean
      paymentMethodId: String
    ): JSON
    confirmOrder(
      checkoutModel: CheckoutModelInput!
      paymentIntentId: String!
    ): StripeConfirmOrderResponse!
  }

  type StripeConfirmOrderResponse {
    success: Boolean!
    orderId: String
  }

  type KlarnaMutations {
    renderCheckout(
      checkoutModel: CheckoutModelInput!
    ): KlarnaRenderCheckoutReponse!
  }

  type KlarnaRenderCheckoutReponse {
    html: String!
    klarnaOrderId: String!
    crystallizeOrderId: String!
  }

  type MollieMutations {
    createPayment(
      checkoutModel: CheckoutModelInput!
    ): MollieCreatePaymentResponse!
  }

  type MollieCreatePaymentResponse {
    success: Boolean!
    checkoutLink: String
    crystallizeOrderId: String!
  }

  type VippsMutations {
    initiatePayment(
      checkoutModel: CheckoutModelInput!
    ): VippsInitiatePaymentResponse!
  }

  type VippsInitiatePaymentResponse {
    success: Boolean!
    checkoutLink: String
    crystallizeOrderId: String!
  }

  type PaypalMutation {
    createPayment(checkoutModel: CheckoutModelInput!): PaypalPaymentResponse!
    confirmPayment(
      checkoutModel: CheckoutModelInput!
      orderId: String
    ): PaypalPaymentResponse!
  }

  type PaypalPaymentResponse {
    success: Boolean!
    orderId: String
  }

  type InvoiceMutation {
    createInvoice(checkoutModel: CheckoutModelInput!): CreateInvoiceMutation!
  }

  type CreateInvoiceMutation {
    success: Boolean!
    orderId: String
  }

  type KeyValuePair {
    key: String!
    value: String
  }

  input KeyValuePairInput {
    key: String!
    value: String
  }
`;
