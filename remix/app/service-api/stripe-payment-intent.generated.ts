import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type StripePaymentIntentMutationVariables = Types.Exact<{
  checkoutModel: Types.CheckoutModelInput;
}>;


export type StripePaymentIntentMutation = (
  { __typename?: 'Mutation' }
  & { paymentProviders: (
    { __typename?: 'PaymentProvidersMutations' }
    & { stripe: (
      { __typename?: 'StripeMutations' }
      & Pick<Types.StripeMutations, 'createPaymentIntent'>
    ) }
  ) }
);


export const StripePaymentIntentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StripePaymentIntent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutModel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutModelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stripe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPaymentIntent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutModel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutModel"}}}]}]}}]}}]}}]} as unknown as DocumentNode<StripePaymentIntentMutation, StripePaymentIntentMutationVariables>;